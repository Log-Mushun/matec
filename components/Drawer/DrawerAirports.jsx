import React from 'react'
import {motion} from 'framer-motion'

function DrawerAirports() {
    const transitions = useTransition(show, null, {
        from: { position: "fixed", opacity: 0, width: 0 },
        enter: { opacity: 1, width: 320 },
        leave: { opacity: 0, width: 0 }
      });
  return (
    <div>{transitions?.map(
        ({ item, key, props }) =>
          item && (
            <motion.div
              key={key}
              style={{ opacity: props.opacity }}
              className="overlay"
            >
              <motion.div style={{ width: props.width }} className="drawer">
                DRIVERS
              </motion.div>
              <div className="fill" onClick={() => setShow(false)} />
            </motion.div>
          )
      )}</div>
  )
}

export default DrawerAirports