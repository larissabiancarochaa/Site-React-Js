import React from 'react';
import styled from 'styled-components';
import colors from '../../../components/colors';
import { SectionTitle, SectionDescription } from '../../../components/Typography';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { useDarkMode } from '../../../context/DarkModeContext';
import { AboutViewModel } from '../../../viewmodels/HomeViewModel'; // Importe o ViewModel

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const defaultColors = {
  background: colors.white,
  textColor: colors.black,
  chartBorderColor: colors.mediumBlue,
  chartPointColor: colors.mediumBlue,
  chartBackgroundColor: 'rgba(0, 0, 139, 0.2)',
  ctaBackground: colors.mediumBlue,
  ctaText: colors.white,
  ctaHoverBackground: colors.darkBlue,
};

const darkModeColors = {
  background: colors.black,
  textColor: colors.lightGray,
  chartBorderColor: colors.lightGray,
  chartPointColor: colors.lightGray,
  chartBackgroundColor: 'rgba(255, 255, 255, 0.2)',
  ctaBackground: colors.lightGray,
  ctaText: colors.black,
  ctaHoverBackground: colors.darkGray,
};

const AboutSection = styled.section<{ bgColor: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const AboutContent = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutText = styled.div<{ textColor: string }>`
  flex: 1;
  max-width: 500px;
  text-align: left;
  color: ${({ textColor }) => textColor};

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const ChartContainer = styled.div`
  flex: 1;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CTAButton = styled.a<{ bgColor: string; textColor: string; hoverBgColor: string }>`
  display: inline-block;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  text-align: center;

  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor};
  }
`;

const chartData = (chartColors: any, data: number[], labels: string[]) => ({
  labels: labels,
  datasets: [
    {
      label: 'Monthly Data',
      data: data,
      borderColor: chartColors.chartBorderColor,
      backgroundColor: chartColors.chartBackgroundColor,
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: chartColors.chartPointColor,
    },
  ],
});

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return `${context.dataset.label}: ${context.raw}`;
        },
      },
    },
  },
  elements: {
    line: {
      borderWidth: 3,
    },
    point: {
      radius: 6,
      hoverRadius: 8,
    },
  },
};

const AboutSectionComponent: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const currentColors = isDarkMode ? darkModeColors : defaultColors;

  const aboutViewModel = new AboutViewModel(); // Instancie o ViewModel

  return (
    <AboutSection bgColor={currentColors.background}>
      <AboutContent>
        <AboutText textColor={currentColors.textColor}>
          <SectionTitle>{aboutViewModel.getTitle()}</SectionTitle>
          <SectionDescription>
            {aboutViewModel.getDescription()}
          </SectionDescription>
          <CTAButton 
            href={aboutViewModel.getCtaLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            bgColor={currentColors.ctaBackground} 
            textColor={currentColors.ctaText} 
            hoverBgColor={currentColors.ctaHoverBackground}
          >
            {aboutViewModel.getButtonText()}
          </CTAButton>
        </AboutText>
        <ChartContainer>
          <Line 
            data={chartData(currentColors, aboutViewModel.getChartData(), aboutViewModel.getChartLabels())} 
            options={chartOptions} 
          />
        </ChartContainer>
      </AboutContent>
    </AboutSection>
  );
};

export default AboutSectionComponent;
