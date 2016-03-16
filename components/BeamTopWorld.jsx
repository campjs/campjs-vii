import React, { PropTypes } from 'react'
import {
  Block,
  Link
} from './'
import { isNotFirefox } from '../utils'

const classes = {
  base: 'Trfs(p) Pos(a) W(100%) T(0) L(0) H(0) Mt(-50%) Pt(100%) Bgc(grass)' +
    ' Trf(beamTopWorld)',
  scene: 'StretchedBox Trf(beamTopScene) Trfs(p)',
  inner: 'Pos(r) H(100%) W(100%) Trfs(p)'
}

const BeamTopWorld = ({
  currentSide
}) => {
  const home = currentSide === 0
  return (
    <div className={classes.base}>
      <div className={classes.scene}>
        <div className={classes.inner}>
          {isNotFirefox &&
            <Block size={[800, 1, 800]}
              position={[-400, -5, -400]}
              currentSide={currentSide}
              postionAfterIntro={[-400, -100, -400]}
              hideAfterIntro
              introClasses='Anim(wave)'
              background='water'/>
          }
          {/* Fire */}
          <Block size={[2, 1, 8]}
            position={[75, 1, 46]}
            background='wood'
            currentSide={currentSide} />
          <Block size={[8, 1, 2]}
            position={[71, 1, 49]}
            background='wood'
            currentSide={currentSide} />
          <Block size={[10, 2, 2]}
            position={[70, 1, 42]}
            background='wood'
            currentSide={currentSide} />
          <Block size={[2, 2, 10]}
            position={[66, 1, 48]}
            background='wood'
            currentSide={currentSide} />
          <Block size={[3, 1, 3]}
            position={[73, 2, 48.5]}
            background='fire'
            className='Anim(fireBottom)'
            currentSide={currentSide} />
          <Block size={[2, 1, 2]}
            position={[75, 3, 49]}
            className='Anim(fireTop)'
            background='fireBright'
            currentSide={currentSide} />
          {/* Pond */}
          <Block size={[28, 1, 15]}
            position={[10, 1, 15]}
            background='water'
            currentSide={currentSide} />
          <Block size={[12, 1, 15]}
            position={[10, 1, 29]}
            background='water'
            currentSide={currentSide} />
          <Block size={[2, 1, 2]}
            position={[26, 2, 18]}
            background='leaves'
            currentSide={currentSide} />
          <Block size={[2, 1, 2]}
            position={[31, 2, 21]}
            background='leaves'
            currentSide={currentSide} />
          {/* Small Tree */}
          <Block size={[2, 4, 2]}
            position={[29, 1, 40]}
            background='wood'
            currentSide={currentSide} />
          <Block size={[4, 5, 4]}
            position={[27, 4, 39]}
            background='tree'
            currentSide={currentSide} />
          {/* Tents */}
          <Block size={[12, 1, 10]}
            position={[15, 4, 58]}
            rotate={[0, 0, 55]}
            currentSide={currentSide} />
          <Block size={[12, 1, 10]}
            position={[8, 4, 58]}
            rotate={[0, 0, -55]}
            currentSide={currentSide} />
          <Block size={[12, 1, 10]}
            position={[30, 4, 72]}
            rotate={[0, 0, 55]}
            currentSide={currentSide} />
          <Block size={[12, 1, 10]}
            position={[23, 4, 72]}
            rotate={[0, 0, -55]}
            currentSide={currentSide} />
          <Link to={home ? '/news/' : '/'} title='CAMPJS'>
            {/* C */}
            <Block size={[4, 4, 5]}
              position={[11, 4, 1]}
              currentSide={currentSide} />
            <Block size={[10, 4, 5]}
              position={[3, 1, 1]}
              currentSide={currentSide} />
            <Block size={[4, 13, 5]}
              position={[1, 4, 1]}
              currentSide={currentSide} />
            <Block size={[10, 4, 5]}
              position={[3, 15, 1]}
              currentSide={currentSide} />
            <Block size={[4, 4, 5]}
              position={[11, 13, 1]}
              currentSide={currentSide} />
            {/* A */}
            <Block size={[4, 16, 5]}
              position={[18, 1, 1]}
              currentSide={currentSide} />
            <Block size={[9, 4, 5]}
              position={[20, 15, 1]}
              currentSide={currentSide} />
            <Block size={[9, 4, 5]}
              position={[20, 7, 1]}
              currentSide={currentSide} />
            <Block size={[4, 16, 5]}
              position={[27, 1, 1]}
              currentSide={currentSide} />
            {/* M */}
            <Block size={[4, 18, 5]}
              position={[34, 1, 1]}
              currentSide={currentSide} />
            <Block size={[17, 4, 5]}
              position={[35, 15, 1]}
              currentSide={currentSide} />
            <Block size={[4, 18, 5]}
              position={[42, 1, 1]}
              currentSide={currentSide} />
            <Block size={[4, 17, 5]}
              position={[49, 1, 1]}
              currentSide={currentSide} />
            {/* P */}
            <Block size={[4, 18, 5]}
              position={[55, 1, 1]}
              currentSide={currentSide} />
            <Block size={[10, 4, 5]}
              position={[57, 15, 1]}
              currentSide={currentSide} />
            <Block size={[10, 4, 5]}
              position={[57, 7, 1]}
              currentSide={currentSide} />
            <Block size={[4, 8, 5]}
              position={[65, 9, 1]}
              currentSide={currentSide} />
            {/* J */}
            <Block size={[4, 6, 5]}
              position={[72, 4, 1]}
              currentSide={currentSide} />
            <Block size={[10, 4, 5]}
              position={[74, 1, 1]}
              currentSide={currentSide} />
            <Block size={[4, 15.5, 5]}
              position={[81, 4, 1]}
              currentSide={currentSide} />
            {/* S */}
            <Block size={[11, 4, 5]}
              position={[89, 1, 1]}
              currentSide={currentSide} />
            <Block size={[4, 7, 5]}
              position={[97, 4, 1]}
              currentSide={currentSide} />
            <Block size={[9, 4, 5]}
              position={[90, 8, 1]}
              currentSide={currentSide} />
            <Block size={[4, 8, 5]}
              position={[88, 10, 1]}
              currentSide={currentSide} />
            <Block size={[11, 4, 5]}
              position={[90, 15, 1]}
              currentSide={currentSide} />
            {/* VII */}
            <Block size={[12, 12, 5]}
              position={[89, 20, 1]}
              background='dirt'
              className='Z(10)'
              currentSide={currentSide}>
              <div className='Fz(msn1) Fz(ms1)--sm'>VII</div>
            </Block>
          </Link>
          {/* Signpost */}
          <Block size={[3, 4, 3]}
            position={[76, 1, 90]}
            background='dirt'
            currentSide={currentSide} />
          <Block size={[38, 15, 5]}
            position={[59, 5, 89]}
            background='sand'
            currentSide={currentSide}>
            <Link to='/about/'
              className='signpost Bgc(dirt):h Lts(-0.01em) P(re) P(rq)--sm W(100%) H(100%) Bds(s) Bgc(dirt) Bdw(re) Bdw(rq)--sm Bdc(sand)'>
              <div className='H(100%) D(f) Ai(c) Jc(c) Ta(c) Fz(msn2) Fz(msn1)--osm Fz(ms0)--osmd Fz(ms1)--md'>
                <div className='Ai(c) Jc(c) Fld(c)'>
                  <div>3-6 June, 2016</div>
                  <div className='Fz(.75em) Op(.75)'>Broken Bay, Sydney</div>
                </div>
                <div className='Pstart(rh) Op(0) Trs(aeo) Mstart(-1em) W(1em) signpost:h_Op(1) signpost:h_Mstart(0) Fz(ms2)'>></div>
              </div>
            </Link>
          </Block>
          {isNotFirefox &&
            <div>
              {/* Trees */}
              <Block size={[2, 5, 2]}
                position={[7, 1, 18]}
                background='wood'
                currentSide={currentSide} />
              <Block size={[4, 8, 4]}
                position={[6, 5, 17]}
                background='tree'
                currentSide={currentSide} />
              <Block size={[2, 6, 2]}
                position={[6, 1, 27]}
                background='wood'
                currentSide={currentSide} />
              <Block size={[4, 10, 4]}
                position={[5, 6, 26]}
                background='tree'
                currentSide={currentSide} />
              {/* Fire Trees */}
              <Block size={[2, 9, 2]}
                position={[85, 1, 38]}
                background='wood'
                currentSide={currentSide} />
              <Block size={[5, 7, 5]}
                position={[82, 9, 36.5]}
                background='tree'
                currentSide={currentSide} />
              <Block size={[2, 9, 2]}
                position={[77, 1, 34]}
                background='wood'
                currentSide={currentSide} />
              <Block size={[5, 9, 5]}
                position={[74, 9, 32.5]}
                background='tree'
                currentSide={currentSide} />
              <Block size={[2, 8, 2]}
                position={[68, 1, 36]}
                background='wood'
                currentSide={currentSide} />
              <Block size={[5, 12, 5]}
                position={[65, 8, 34.5]}
                background='tree'
                currentSide={currentSide} />
              {/* Front right cloud */}
              <Block size={[5, 4, 11]}
                position={[140, 36, 80]}
                currentSide={currentSide} />
              <Block size={[5, 9, 20]}
                position={[140, 28, 75]}
                currentSide={currentSide} />
            </div>
          }
          {/* Clouds */}
          <Block size={[5, 10, 30]}
            position={[-10, 35, 70]}
            currentSide={currentSide} />
          <Block size={[5, 10, 15]}
            position={[-10, 43, 78]}
            currentSide={currentSide} />
          <Block size={[5, 8, 23]}
            position={[-3, 28, 4]}
            currentSide={currentSide} />
          <Block size={[5, 5, 9]}
            position={[-3, 35, 10]}
            currentSide={currentSide} />
          <Block size={[5, 9, 27]}
            position={[65, 28, -48]}
            currentSide={currentSide} />
          <Block size={[5, 5, 11]}
            position={[65, 36, -40]}
            currentSide={currentSide} />
        </div>
      </div>
    </div>
  )
}

BeamTopWorld.propTypes = {
  currentSide: PropTypes.number.isRequired
}

export default BeamTopWorld
