export const dataDummyPlant = [
  {
    id: 1,
    name: "Lavender-antrornawd",
    description: "Lavender is Flowers Updated",
    is_toxic: true,
    harvest_duration: "3 month",
    plant_category: {
      id: 1,
      name: "Fruits",
      image_url: "https://example.com/images/fruits.jpg",
    },
    climate_condition: "Dry",
    planting_time: "Summer",
    sunlight: "Fullsun",
    plant_characteristic: {
      id: 2,
      height: 100,
      height_unit: "centimeter",
      wide: 5,
      wide_unit: "centimeter",
      leaf_color: "Green",
    },
    watering_schedule: {
      id: 2,
      plant_id: 1,
      watering_frequency: 7,
      each: "days",
      watering_amount: 500,
      unit: "ml",
      watering_time: "09:00",
      weather_condition: ["Sunny", "Bright Sunny"],
      condition_description: [
        "Water early in the morning when it's sunny",
        "If Sunny May wons",
      ],
    },
    plant_instructions: [
      {
        id: 3,
        plant_id: 1,
        instruction_category: {
          id: 1,
          name: "Instruction 1",
          description: "Description 1",
          image_url: "https://example.com/images/fruits.jpg",
        },
        step_number: 1,
        step_title: "Instruction 1",
        step_description: "Description of Instruction 1",
        step_image_url:
          "https://res.cloudinary.com/dxrz0cg5z/image/upload/v1717823367/be-agriculture/mvm4x0godb5oozejh0nn.png",
      },
      {
        id: 4,
        plant_id: 1,
        instruction_category: {
          id: 2,
          name: "Instruction 2",
          description: "Description 2",
          image_url: "https://example.com/images/vegetables.jpg",
        },
        step_number: 2,
        step_title: "Instruction 2",
        step_description: "Description of Instruction 2",
        step_image_url:
          "https://res.cloudinary.com/dxrz0cg5z/image/upload/v1717823367/be-agriculture/kr0qwx29gtsspiknaasz.png",
      },
    ],
    additional_tips: "Add tips instruction",
    plant_faqs: [
      {
        id: 3,
        plant_id: 1,
        question: "Question 1",
        answer: "Answer 1",
        created_at: "2024-06-08T12:09:29.015+07:00",
      },
      {
        id: 4,
        plant_id: 1,
        question: "Question 2",
        answer: "Answer 2",
        created_at: "2024-06-08T12:09:29.015+07:00",
      },
    ],
    plant_images: [
      {
        id: 2,
        plant_id: 1,
        file_name:
          "https://res.cloudinary.com/dxrz0cg5z/image/upload/v1717823368/be-agriculture/h79stbvcdn1lvuhx9ak3.png",
        is_primary: 1,
      },
    ],
    created_at: "2024-06-08T12:08:11.805+07:00",
  },
  {
    id: 2,
    name: "Lavender-asggg",
    description: "Lavender is Flowers Updated",
    is_toxic: true,
    harvest_duration: "3 month",
    plant_category: {
      id: 1,
      name: "Fruits",
      image_url: "https://example.com/images/fruits.jpg",
    },
    climate_condition: "Dry",
    planting_time: "Summer",
    sunlight: "Fullsun",
    plant_characteristic: {
      id: 2,
      height: 100,
      height_unit: "centimeter",
      wide: 5,
      wide_unit: "centimeter",
      leaf_color: "Green",
    },
    watering_schedule: {
      id: 2,
      plant_id: 2,
      watering_frequency: 7,
      each: "days",
      watering_amount: 500,
      unit: "ml",
      watering_time: "09:00",
      weather_condition: ["Sunny", "Bright Sunny"],
      condition_description: [
        "Water early in the morning when it's sunny",
        "If Sunny May wons",
      ],
    },
    plant_instructions: [
      {
        id: 3,
        plant_id: 2,
        instruction_category: {
          id: 1,
          name: "Instruction 1",
          description: "Description 1",
          image_url: "https://example.com/images/fruits.jpg",
        },
        step_number: 1,
        step_title: "Instruction 1",
        step_description: "Description of Instruction 1",
        step_image_url:
          "https://res.cloudinary.com/dxrz0cg5z/image/upload/v1717823367/be-agriculture/mvm4x0godb5oozejh0nn.png",
      },
      {
        id: 4,
        plant_id: 2,
        instruction_category: {
          id: 2,
          name: "Instruction 2",
          description: "Description 2",
          image_url: "https://example.com/images/vegetables.jpg",
        },
        step_number: 2,
        step_title: "Instruction 2",
        step_description: "Description of Instruction 2",
        step_image_url:
          "https://res.cloudinary.com/dxrz0cg5z/image/upload/v1717823367/be-agriculture/kr0qwx29gtsspiknaasz.png",
      },
    ],
    additional_tips: "Add tips instruction",
    plant_faqs: [
      {
        id: 3,
        plant_id: 2,
        question: "Question 1",
        answer: "Answer 1",
        created_at: "2024-06-08T12:09:29.015+07:00",
      },
      {
        id: 4,
        plant_id: 2,
        question: "Question 2",
        answer: "Answer 2",
        created_at: "2024-06-08T12:09:29.015+07:00",
      },
    ],
    plant_images: [
      {
        id: 2,
        plant_id: 2,
        file_name:
          "https://res.cloudinary.com/dxrz0cg5z/image/upload/v1717823368/be-agriculture/h79stbvcdn1lvuhx9ak3.png",
        is_primary: 1,
      },
    ],
    created_at: "2024-06-08T12:08:11.805+07:00",
  },
];
