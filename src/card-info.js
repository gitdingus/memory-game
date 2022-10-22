import { v4 as uuid } from 'uuid';
import bevelGauge from './images/bevel-gauge.jpg';
import chisel from './images/chisel.jpg';
import clamp from './images/woodworking-clamp.png';
import combinationSquare from './images/combination-square.jpg';
import handPlane from './images/hand-plane.jpg';
import mallet from './images/woodworking-mallet.jpg';
import pencil from './images/pencil.jpeg';
import saw from './images/saw.jpg';
import tapeMeasure from './images/tape-measure.jpeg';
import vise from './images/woodworking-vise.jpg';
import woodGlue from './images/wood-glue.jpg';
import workbench from './images/woodworking-bench.jpg';

/*
  Returns an array of objects with the card title and associated image
  [
    {
      uuid: string
      title: string,
      image: path,
    },
    ...
  ]
*/
function getCardInfo() {
  return [
    {
      uuid: uuid(),
      title: 'Bevel Gauge',
      path: bevelGauge,
    },
    {
      uuid: uuid(),
      title: 'Chisel',
      path: chisel,
    },
    {
      uuid: uuid(),
      title: 'Clamp',
      path: clamp,
    },
    {
      uuid: uuid(),
      title: 'Combination Square',
      path: combinationSquare,
    },
    {
      uuid: uuid(),
      title: 'Hand Plane',
      path: handPlane,
    },
    {
      uuid: uuid(),
      title: 'Mallet',
      path: mallet,
    },
    {
      uuid: uuid(),
      title: 'Pencil',
      path: pencil,
    },
    {
      uuid: uuid(),
      title: 'Saw',
      path: saw,
    },
    {
      uuid: uuid(),
      title: 'Tape Measure',
      path: tapeMeasure,
    },
    {
      uuid: uuid(),
      title: 'Wood Glue',
      path: woodGlue,
    },
    {
      uuid: uuid(),
      title: 'Woodworking Vise',
      path: vise,
    },
    {
      uuid: uuid(),
      title: 'Work Bench',
      path: workbench,
    },
  ];
}

export default getCardInfo;
