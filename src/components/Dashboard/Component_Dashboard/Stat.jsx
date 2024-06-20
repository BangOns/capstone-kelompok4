"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IconsImport } from "../../../utils/IconsImport";

const API_PLANTS_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/plants?page=1&limit=10`;
const API_CATEGORIES_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/plants/categories`;

export default function Stat() {
    const [totalPlantsCount, setTotalPlantsCount] = useState(0);
    const [totalCategoriesCount, setTotalCategoriesCount] = useState(0);

    // Fetch total plants count
    useEffect(() => {
        const fetchPlantsData = async () => {
            try {
                const response = await fetch(API_PLANTS_URL, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_KEY}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const responseData = await response.json();
                setTotalPlantsCount(responseData.data.total_count);
            } catch (error) {
                console.error("Error fetching plant data:", error);
            }
        };

        fetchPlantsData();
    }, []);

    // Fetch total categories count
    useEffect(() => {
        const fetchCategoriesCount = async () => {
            try {
                const response = await fetch(API_CATEGORIES_URL, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_KEY}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const responseData = await response.json();
                setTotalCategoriesCount(responseData.data.length);
            } catch (error) {
                console.error("Error fetching categories count:", error);
            }
        };

        fetchCategoriesCount();
    }, []);

    return (
        <div className="mt-4">
            <div className="stats shadow">
                {/* Total Plants Stat */}
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <Image src={IconsImport.IconsPlant} alt="Plant Icons"/>
                    </div>
                    <div className="stat-title">Total Plants</div>
                    <div className="stat-value">{totalPlantsCount}</div>
                </div>

                {/* Total Categories Stat */}
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <Image src={IconsImport.IconsPlantV2} alt="Plant Icons"/>
                    </div>
                    <div className="stat-title">Total Categories</div>
                    <div className="stat-value">{totalCategoriesCount}</div>
                </div>
                
            </div>
        </div>
    );
}
