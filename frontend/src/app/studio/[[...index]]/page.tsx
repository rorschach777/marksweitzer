"use client";

import { NextStudio } from "next-sanity/studio";
import config from '../../../../sanity.config'
import './page.scss';
export default function Studio() {
  return <NextStudio config={config} />;
}