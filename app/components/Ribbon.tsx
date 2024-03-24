'use client'

import { Phone, WhatsappLogo } from '@phosphor-icons/react';
import React from 'react'

type Props = {}

const Ribbon = (props: Props) => {
  return (
    <div className="sm:hidden flex-col justify-center items-center bg-primary px-3 py-2">
      {/* <div>
            <p className="text-white font-semibold">Servicio Delivery</p>
          </div> */}
      <div className="flex gap-x-2 justify-center items-center">
        <div className="flex items-center gap-x-2">
          <div className="border-2 border-white rounded-full p-1">
            <Phone size={24} weight="fill" className="fill-white" />
          </div>
          <p className="text-white font-bold">2222-5555</p>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="cursor-pointer">
            <WhatsappLogo size={44} color="#ffffff" weight="regular" />
          </div>
          <p className="text-white font-bold">8888-5555</p>
        </div>
      </div>
    </div>
  );
}

export default Ribbon