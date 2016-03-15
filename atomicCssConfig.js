function pxTo (value, baseFontSize, unit) {
  baseFontSize = baseFontSize || '16'
  return +(value / baseFontSize).toFixed(3) + unit
}

// function pxToRem (value, baseFontSize) {
//   baseFontSize = baseFontSize || '16'
//   return pxTo(value, baseFontSize, 'rem')
// }

function pxToEm (value, baseFontSize) {
  baseFontSize = baseFontSize || '16'
  return pxTo(value, baseFontSize, 'em')
}

// Calculate Rhythm
function r (value, unit) {
  unit = unit || 'rem'
  return value * 1.5 + unit
}

// Calculate Modular Scale
function calcScale (value, base, ratio, unit) {
  return +(Math.pow(ratio, value) * base).toFixed(3) + unit
}

function ms (value, unit) {
  unit = unit || 'rem'
  return calcScale(value, 1, 1.2, unit)
}

/* eslint-disable */
module.exports = {
  cssDest: './css/atomic.css',
  configs: {
    breakPoints: {
      osm: '@media screen and (min-width: ' + pxToEm(470) + ') and (max-width: ' + pxToEm(879) + ')',
      sm: '@media screen and (min-width: ' + pxToEm(470) + ')',
      osmd: '@media screen and (min-width: ' + pxToEm(550) + ') and (max-width: ' + pxToEm(879) + ')',
      smd: '@media screen and (min-width: ' + pxToEm(550) + ')',
      omd: '@media screen and (min-width: ' + pxToEm(880) + ') and (max-width: ' + pxToEm(1199) + ')',
      md: '@media screen and (min-width: ' + pxToEm(880) + ')',
      lg: '@media screen and (min-width: ' + pxToEm(1200) + ')',
      port: '@media screen and (orientation:portrait)',
      land: '@media screen and (orientation:landscape)'
    },
    custom: {
      // Colours
      sky: '#00abef',
      dirt: '#6a6271',
      grass: '#bcce46',
      sand: '#e6daab',
      water: '#5cd8ff',
      wood: '#8f5250',
      leaves: '#0a6',
      tree: '#91cc00',
      fire: '#fd9700',
      fireTop: '#fdd600',

      darkest: 'hsl(188, 28%, 12%)',
      dark: 'hsl(188, 42%, 18%)',
      muted: 'hsl(188, 18%, 56%)',
      neutral: 'hsl(195, 32%, 80%)',
      light: 'hsl(213, 44%, 95%)',
      // Gradierts
      grdlightb: 'linear-gradient(0deg,rgba(255,255,255,0.4),rgba(255,255,255,0) 60%)',
      grdlightt: 'linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0) 60%)',
      grddarkt: 'linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0) 60%)',
      // Borders
      bd1: 'solid 1px',
      bd2: 'solid 2px',
      chunky: 'solid .375rem',
      // Rhythm
      nrh: r(-0.5),
      nrq: r(-0.25),
      re: r(0.125),
      rq: r(0.25),
      rh: r(0.5),
      r3q: r(0.75),
      r1: r(1),
      r1q: r(1.25),
      r1h: r(1.5),
      r2: r(2),
      r3: r(3),
      r4: r(4),
      r6: r(6),
      r8: r(8),
      r16: r(16),
      r32: r(32),
      // Modular Scale
      msn2: ms(-2),
      msn1: ms(-1),
      ms0: ms(0),
      ms1: ms(1),
      ms2: ms(2),
      ms3: ms(3),
      ms4: ms(4),
      ms5: ms(5),
      ms6: ms(6),
      // Fonts
      sans: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
      mono: '"Source Code Pro", Input, Hack, Consolas, monaco, monospace',
      bit: '"SG", "Source Code Pro", Input, Hack, Consolas, monaco, monospace',
      // Border Radius
      rnd: '500px',
      // Shadows
      sh1: '0 1px 4px 0 rgba(0, 0, 0, 0.185)',
      sh2: '0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.15)',
      sh3: '0 11px 7px 0 rgba(0, 0, 0, 0.09), 0 13px 25px 0 rgba(0, 0, 0, 0.15)',
      sh4: '0 14px 12px 0 rgba(0, 0, 0, 0.085), 0 20px 40px 0 rgba(0, 0, 0, 0.15)',
      sh5: '0 17px 17px 0 rgba(0, 0, 0, 0.075), 0 27px 55px 0 rgba(0, 0, 0, 0.15)',
      shw: '0 0 15px 5px #fff',
      ish1: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.185)',
      // Flexbox
      flx1: '1',
      if: 'inline-flex',
      // Transitions
      eo: 'transform .3s cubic-bezier(0.19, 1, 0.22, 1), opacity .3s cubic-bezier(0.19, 1, 0.22, 1)', // Ease out
      eol: 'transform .7s cubic-bezier(0.19, 1, 0.22, 1), opacity .6s cubic-bezier(0.19, 1, 0.22, 1)', // Ease out
      eoel: 'transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity .6s cubic-bezier(0.19, 1, 0.22, 1)', // Ease out
      eib: 'transform .3s cubic-bezier(0.6, -0.28, 0.735, 0.045), opacity .3s cubic-bezier(0.6, -0.28, 0.735, 0.045)',  // Ease in back
      eob: 'transform .3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity .3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',  // Ease out back
      aeo:  'all .3s cubic-bezier(0.19, 1, 0.22, 1)',
      aeol:  'all .7s cubic-bezier(0.19, 1, 0.22, 1)',
      aeib: 'all .3s cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      aeob: 'all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      // Animations
      wave: '5s ease-in-out 1s alternate infinite wave',
      // Transforms
      // TranslateZ can't use percentages
      // So have to use a combination of X & Y
      beamTop: 'rotateX(-10deg) rotateY(-45deg) scale3d(.65, .65, .65)',
      beamFront: 'rotateX(0deg)',
      // Need .0001 for chrome bug that thinks it's not a viewable plane
      // When it's at exactly 90deg
      beamRight: 'rotateX(0deg) rotateY(-90.001deg)',
      beamBack: 'rotateX(0deg) rotateY(-180deg)',
      beamLeft: 'rotateX(0deg) rotateY(-270.001deg)',
      beamBottom: 'rotateX(20deg) rotateY(-45deg) scale3d(.65, .65, .65)',
      faceTop: 'rotateX(180deg) translateY(50%) RotateX(-90deg)',
      faceFront: 'rotateY(90deg) translateX(-50%) rotateY(-90deg)',
      faceRight: 'translateX(50%) rotateY(90deg)',
      faceBack: 'rotateY(90deg) translateX(50%) rotateY(90deg)',
      faceLeft: 'translateX(-50%) rotateY(-90deg)',
      faceBottom: 'rotateX(-180deg) translateY(-50%) rotateX(90deg)',
      blockBottom: 'translateY(-50%) rotateX(90deg)',
      blockRight: 'translateX(-50%) rotateY(90deg)',
      beamTopWorld: 'rotateY(-90deg) rotateY(-270deg)',
      beamTopScene: 'translateY(-50%) rotateX(-90deg) translateY(-50%)',
      // Perspective origin
      prsoa: 'center -61.5rem',
      // Defaults
      i: 'inherit'
    },
    classNames: [
      'Lh(1.5)',
      'Ff(mono)',
      'Op(1)!',
      'Mt(r2)',
      'Mb(r1)',
      'Cur(d)!',
      'Fw(800)',
      'List(s)',
      'Pstart(r1)',
      'Mx(0)',
      'My(r1h)',
      'My(r2)',
      'Mstart(r1)',
      'Fz(ms1)',
      'Op(.6)',
      'Ov(h)',
      'Bdrs(re)',
      'Bxsh(sh1)',
      'Bxsh(sh4)',
      'Bxsh(ish1)',
      'Pos(r)',
      'Z(1)',
      'Mx(a)',
      'H(0)',
      'Pt(4%)',
      'Maw(15rem)',
      'Bdrs(r1)',
      'Bgc(sky)',
      'Px(rh)',
      'Pt(rh)',
      'Pb(r1)',
      'Pb(r1h)',
      'D(b)',
      'Mih(12rem)'
    ]
  }
}
/* eslint-enable */
