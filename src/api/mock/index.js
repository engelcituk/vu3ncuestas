import survey from "@/api/mock/data/survey";

const fetchMockData = (mockData, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
};

export const fetchSurvey = () => {
    return fetchMockData(survey, 1000);
};
