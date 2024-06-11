import { createContext, useState } from "react";

export const AddPlantsContext = createContext();

export const AddPlantsProvider = ({ children }) => {
  const [weatherCondition, setWeatherCondition] = useState([]);
  const [conditionDescription, setConditionDescription] = useState([]);
  const [condition, setCondition] = useState([
    {
      weatherCondition: "",
      conditionDescription: "",
    },
  ]);
  const [weatherConditionDisplay, setWeatherConditionDisplay] = useState([]);
  const [isWeatherOpen, setIsWeatherOpen] = useState([]);

  return (
    <AddPlantsContext.Provider
      value={{
        weatherCondition,
        setWeatherCondition,
        conditionDescription,
        setConditionDescription,
        condition,
        setCondition,
        weatherConditionDisplay,
        setWeatherConditionDisplay,
        isWeatherOpen,
        setIsWeatherOpen,
      }}
    >
      {children}
    </AddPlantsContext.Provider>
  );
};
