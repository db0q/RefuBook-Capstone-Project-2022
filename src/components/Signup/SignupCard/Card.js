import React from 'react';
import Google from '../buttons/Google';
import Facebook from '../buttons/Facebook';
import { useTranslation } from 'react-i18next';

export default function Card(props) {
  const { t } = useTranslation();
  return (
    <div className="bg-white max-sm:px-8 max-sm:mb-32  py-16 max-sm:w-80 max-sm:my-10 shadow-xl shadow-gray-300 rounded-3xl max-md:mb-10 max-md:px-16 max-2xl:mb-10 max-2xl:px-16">
      <h3 className="text-prim uppercase text-lg mb-8">{props.title}</h3>
      <div className="flex max-sm:flex-col max-md:gap-8 max-md:flex-row max-xl:gap-10 max-2xl:gap-10 max-xl:flex-row items-center max-sm:gap-3 max-sm:justify-center">
        <Google />
        <h3 className="text-prim uppercase text-lg">{t('signUp.or')}</h3>
        <Facebook />
      </div>
    </div>
  );
}
