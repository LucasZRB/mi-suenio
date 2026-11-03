import styled from 'styled-components';

export const FloatingContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 1000;
`;

export const FloatingButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ $isWhatsApp, theme }) => 
    $isWhatsApp ? '#25D366' : theme.colors.rosaPardo};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.black30};
  cursor: pointer;
  text-decoration: none;
  border: none;
  font-size: 20px;
  transition: all 0.3s ease;
  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)')};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};

  &:hover {
    background-color: ${({ $isWhatsApp, theme }) => 
      $isWhatsApp ? '#20ba5a' : theme.colors.rosaPardoHover};
    transform: scale(1.08);
  }
`;
