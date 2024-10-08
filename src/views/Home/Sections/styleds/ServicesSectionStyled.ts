import styled from 'styled-components';
import colors from '../../../../components/colors';

const defaultColors = {
  background: colors.white,
  cardBackground: colors.white,
  cardText: colors.darkBlue,
  buttonBackground: colors.darkBlue,
  buttonHover: colors.darkCardBackground,
  buttonTextHover: colors.white,
};

const darkModeColors = {
  background: colors.darkBackground,
  cardBackground: colors.darkCardBackground,
  cardText: colors.darkTextColor,
  buttonBackground: colors.mediumGray,
  buttonHover: colors.darkGray,
  buttonTextHover: colors.lightGray,
};

export const ServicesSection = styled.section<{ bgColor: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const ServicesContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px; // Espaçamento entre seções
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; // Espaçamento entre cartões
`;

export const ServiceCard = styled.div<{ bgColor: string; textColor: string }>`
  flex: 1;
  width: 280px; 
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 280px;
  max-width: 280px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px; // Altura da imagem
  object-fit: cover; // Mantém a proporção da imagem
`;

export const CardTitle = styled.h4`
  margin: 10px 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;

export const ContainerButton = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CardButton = styled.button<{ buttonBackground: string; buttonHover: string; buttonTextHover: string }>`
  font-size: 1.1rem;
  color: ${({ buttonTextHover }) => buttonTextHover};
  border: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s ease, color 0.3s ease;
  width: 100%;
  background: ${({ buttonBackground }) => buttonBackground};
  
  &:hover {
    background: ${({ buttonHover }) => buttonHover};
    color: ${({ buttonTextHover }) => buttonTextHover};
  }
`;