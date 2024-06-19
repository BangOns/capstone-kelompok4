import { createContext, useState } from "react";

export const EditPlantsContext = createContext();

export const EditPlantsProvider = ({ children }) => {
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
    <EditPlantsContext.Provider
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
    </EditPlantsContext.Provider>
  );
};
