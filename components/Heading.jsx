import React from 'react' // eslint-disable-line

const classes = 'Fw(600)'

const Heading = ({ children, level }) => {
  switch (level) {
    case '6': return <h6 className={classes + ' Fz(ms1)'}>{children}</h6>
    case '5': return <h5 className={classes + ' Fz(ms2)'}>{children}</h5>
    case '4': return <h4 className={classes + ' Fz(ms3)'}>{children}</h4>
    case '3': return <h3 className={classes + ' Fz(ms4)'}>{children}</h3>
    case '2': return <h2 className={classes + ' Fz(ms5)'}>{children}</h2>
    case '1':
    default: return <h1 className={classes + ' Fz(ms6)'}>{children}</h1>
  }
}

export default Heading
