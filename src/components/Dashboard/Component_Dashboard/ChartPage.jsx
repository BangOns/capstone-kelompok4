"use client"

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import axios from "axios";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartPage = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch categories data
                const categoriesResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/plants/categories`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_KEY}`
                    }
                });
                const categoriesData = categoriesResponse.data.data;

                if (!categoriesData || categoriesData.length === 0) {
                    console.error("No categories data found.");
                    return;
                }

                // Fetch plants data
                const plantsResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/plants?page=1&limit=10`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_KEY}`
                    }
                });
                const plantsData = plantsResponse.data.data.plants;

                if (!plantsData || plantsData.length === 0) {
                    console.error("No plants data found.");
                    return;
                }

                const plantsCount = {};
                categoriesData.forEach(category => {
                    plantsCount[category.name] = 0;
                });

                plantsData.forEach(plant => {
                    const categoryName = plant.plant_category.name;
                    if (plantsCount[categoryName] !== undefined) {
                        plantsCount[categoryName]++;
                    }
                });

                const chartData = {
                    labels: Object.keys(plantsCount),
                    datasets: [
                        {
                            label: 'Number of Plants',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: '#10B981',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: Object.values(plantsCount)
                        }
                    ]
                };

                setChartData(chartData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mt-3">
            <h1 className="text-lg font-nunito-semibold text-black">Chart Page</h1>
            {chartData ? (
                <div className="w-[900px]">
                    <Line data={chartData} />
                </div>
            ) : (
                <span className="loading loading-spinner loading-lg text-emerald-500"></span>
            )}
        </div>
    );
};

export default ChartPage;

