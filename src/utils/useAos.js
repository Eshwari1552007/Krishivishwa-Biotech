// src/utils/useAOS.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function useAOS(duration = 1000, offset = 100) {
  useEffect(() => {
    AOS.init({
      duration,
      offset,
      once: true,
    });
  }, [duration, offset]);
}
