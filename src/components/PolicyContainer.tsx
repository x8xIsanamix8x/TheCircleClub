import React from 'react';

interface PolicyContainerProps {
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

const PolicyContainer: React.FC<PolicyContainerProps> = ({
  title,
  children,
  maxWidth = '800px',
}) => (
  <div style={{ maxWidth, margin: '0 auto', padding: '20px' }}>
    <h1>{title}</h1>
    {children}
  </div>
);

const ChildSafetyPolicy = () => (
  <PolicyContainer title="Política de Seguridad Infantil - The Circle Club">
    <p>
      The Circle Club es una aplicación exclusiva para mayores de 18 años.
      Cumplimos con todas las leyes de protección infantil, incluyendo:
    </p>
    <ul>
      <li>Prohibición de contenido inapropiado.</li>
      <li>Mecanismos de reporte dentro de la aplicación.</li>
      <li>Colaboración con autoridades en casos de violaciones.</li>
    </ul>
    <p>
      <strong>Contacto para reportes:</strong> info@thecircleclubapp.com
    </p>
  </PolicyContainer>
);

export default ChildSafetyPolicy;