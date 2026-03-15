// src/components/DemoBanner/index.jsx
import styled, { keyframes } from 'styled-components'

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0);     opacity: 1; }
`

const Banner = styled.div`
  width: 100%;
  background: rgba(8, 6, 4, 0.92);
  border-bottom: 1px solid rgba(200, 0, 10, 0.35);
  backdrop-filter: blur(8px);
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation: ${slideDown} 0.4s ease forwards;
  position: sticky;
  top: 0;
  z-index: 9999;
`

const Icon = styled.span`
  font-size: 14px;
  flex-shrink: 0;
`

const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
  text-align: center;
  line-height: 1.5;

  strong {
    color: #ff4d4d;
    font-weight: 700;
  }
`

export function DemoBanner() {
  return (
    <Banner role="status" aria-live="polite">
      <Icon aria-hidden="true">🔒</Icon>
      <Text>
        <strong>Ambiente de demonstração</strong> · Imagens de produtos indisponíveis — backend offline por razões de segurança.
      </Text>
    </Banner>
  )
}