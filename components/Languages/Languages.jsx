import React, { useState } from 'react'
import { US } from 'country-flag-icons/react/3x2'
import { ES } from 'country-flag-icons/react/3x2'
import { CN } from 'country-flag-icons/react/3x2'
import { PT } from 'country-flag-icons/react/3x2'
import { FR } from 'country-flag-icons/react/3x2'
import { DE } from 'country-flag-icons/react/3x2'

import { I18nextProvider, useTranslation } from 'react-i18next';
import { i18n as i18nfile } from "../../i18n";

import { Divider, List, Modal } from '@mui/material'
import { emitCustomEvent } from './eventService'


function Languages() {

  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false)


  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    console.log("cambiando idioma a", lng)
    if (open) {
      setOpen(false)
    }
/*     emitCustomEvent();
 */  };


  return (
    <I18nextProvider i18n={i18nfile}>

      <button className='bottom-1 right-1' style={{
        width: 'auto',
        display: 'flex',
        borderRadius: '5px',
        position: 'fixed',
        padding: "5px",
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Fondo transparente
        backdropFilter: 'blur(10px)', // Efecto de desenfoque
        zIndex: 10
      }}
        onClick={() => {
          if (!open) {
            setOpen(true)
          }
        }} >
        {i18n.language == 'pt' ?
          (<>
            <PT title="Portuguese" className='w-[1.5rem] mr-[0.5rem] pt-[0.2rem]' onClick={() => {
              if (!open) {
                setOpen(true)
              }
            }} />
            PT
          </>)
          : i18n.language == 'es' ?
            (<>
              <ES title="Spanish" className='w-[1.5rem] mr-[0.5rem] pt-[0.2rem]' onClick={() => {
                if (!open) {
                  setOpen(true)
                }
              }} />
              ES
            </>)
            : i18n.language == 'cn' ?
              (<>
                <CN title="Mandarin" className='w-[1.5rem] mr-[0.5rem] pt-[0.2rem]' onClick={() => {
                  if (!open) {
                    setOpen(true)
                  }
                }} />
                CN
              </>)
              : i18n.language == 'fr' ?
                (<>
                  <FR title="French" className='w-[1.5rem] mr-[0.5rem] pt-[0.2rem]' onClick={() => {
                    if (!open) {
                      setOpen(true)
                    }
                  }} />
                  FR
                </>)
                : i18n.language == 'de' ?
                  (<>
                    <DE title="Deutch" className='w-[1.5rem] mr-[0.5rem] pt-[0.2rem]' onClick={() => {
                      if (!open) {
                        setOpen(true)
                      }
                    }} />
                    DE
                  </>)
                  :
                  (<>
                    <US title="English" className='w-[1.5rem] mr-[0.5rem] pt-[0.2rem]' onClick={() => {
                      if (!open) {
                        setOpen(true)
                      }
                    }} />
                    EN
                  </>)
        }

      </button>
      <Modal
        open={open}
        style={{
          width: '100%',
          justifyContent: 'center',
          display: 'flex',
          height: '100%',
          alignItems: 'center',
        }}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#70A6CB' }}>
          {[
            { code: 'en', flag: 'US', texto: 'English' },
            { code: 'es', flag: 'ES', texto: 'Spanish' },
            { code: 'fr', flag: 'FR', texto: 'French' },
            { code: 'de', flag: 'DE', texto: 'Deutsch' },
            { code: 'pt', flag: 'PT', texto: 'Portuguese' },
            { code: 'cn', flag: 'CN', texto: 'Mandarin' }

          ].map((item, index) => (
            <React.Fragment key={index} >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} onClick={() => { changeLanguage(item.code) }}>
                <div>
                  {item.flag.includes('/') ? (
                    <img alt={item.code} src={`/static/images/${item.flag}`} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                  ) : (
                    <img alt={item.code} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.flag}.svg`} style={{ width: '64px', height: '64px', borderRadius: '50%', marginRight: '2rem' }} />
                  )}
                </div>
                <span>{item.texto}</span>
              </div>
              {index < 4 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Modal>
    </I18nextProvider>
  )
}

export default Languages