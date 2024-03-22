import React from "react";

type Props = {};

const PrivacyPolicy = (props: Props) => {
  return (
    <div className="container max-w-screen-lg mx-auto my-20">
      <h1 className="text-xl text-gray-800 font-bold mb-3">Política de Privacidad</h1>
      <p className="text-gray-600 my-2">
        En Farmacia Zulma, valoramos y respetamos tu privacidad. Esta
        Política de Privacidad describe cómo recopilamos, utilizamos y
        protegemos la información que nos proporcionas al utilizar nuestro sitio
        web.
      </p>
      <h2 className="font-semibold text-gray-800 mt-2">Información que Recopilamos</h2>
      <p className="text-gray-600 my-2">
        Cuando visitas nuestro sitio web, podemos recopilar cierta información
        personal identificable, como tu nombre, dirección de correo electrónico,
        número de teléfono y dirección postal. También podemos recopilar
        información no identificable, como tu dirección IP, navegador web,
        sistema operativo y páginas visitadas.
      </p>
      <h2 className="font-semibold text-gray-800 mt-2">Uso de la Información</h2>
      <p className="text-gray-600 my-2">
        La información que recopilamos se utiliza para mejorar la experiencia
        del usuario en nuestro sitio web, personalizar el contenido y las
        ofertas según tus intereses, procesar tus pedidos y proporcionarte
        información relevante sobre nuestros productos y servicios. También
        podemos utilizar tu información para fines de marketing y publicidad,
        pero solo con tu consentimiento explícito.
      </p>
      <h2 className="font-semibold text-gray-800 mt-2">Protección de la Información</h2>
      <p className="text-gray-600 my-2">
        Nos comprometemos a proteger la seguridad de tu información personal y a
        tomar las medidas necesarias para evitar el acceso no autorizado, el uso
        indebido o la divulgación de tus datos. Utilizamos medidas de seguridad
        físicas, electrónicas y administrativas para proteger tu información
        contra pérdidas, robos y accesos no autorizados.
      </p>
      <h2 className="font-semibold text-gray-800 mt-2">Divulgación de Información</h2>
      <p className="text-gray-600 my-2">
        No vendemos, alquilamos ni compartimos tu información personal con
        terceros sin tu consentimiento, excepto cuando sea necesario para
        cumplir con la ley, responder a procesos legales o proteger nuestros
        derechos legales.
      </p>
      <h2 className="font-semibold text-gray-800 mt-2">Enlaces a Sitios de Terceros</h2>
      <p className="text-gray-600 my-2">
        Nuestro sitio web puede contener enlaces a sitios web de terceros que no
        están controlados por nosotros. No somos responsables de las prácticas
        de privacidad o el contenido de estos sitios web, por lo que te
        recomendamos revisar las políticas de privacidad de estos sitios antes
        de proporcionarles tu información personal.
      </p>
      <h2 className="font-semibold text-gray-800 mt-2">Cambios en la Política de Privacidad</h2>
      <p className="text-gray-600 my-2">
        Nos reservamos el derecho de actualizar o modificar esta Política de
        Privacidad en cualquier momento. Cualquier cambio entrará en vigencia
        inmediatamente después de su publicación en nuestro sitio web. Te
        recomendamos que revises periódicamente esta página para estar al tanto
        de cualquier cambio.
      </p>
      <h2 className="font-semibold text-gray-800 mt-2">Contacto</h2>
      <p className="text-gray-600 my-2">
        Si tienes alguna pregunta o inquietud sobre nuestra Política de
        Privacidad, no dudes en ponerte en contacto con nosotros a través de
        info@farmaciazulma.com o 222-5555.
      </p>
      <p className="text-gray-600 my-2">
        Gracias por confiar en Farmacia Zulma para tus necesidades de
        salud y bienestar.
      </p>
      <p className="text-gray-600 my-2">Fecha de Entrada en Vigor: [Fecha]</p>
    </div>
  );
};

export default PrivacyPolicy;
