import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface CursorState {
  isHovering: boolean;
  isText: boolean;
  isHidden: boolean;
}

const CustomCursor = () => {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isText: false,
    isHidden: false,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const ringSpringConfig = { damping: 20, stiffness: 200 };

  const dotX = useSpring(mouseX, springConfig);
  const dotY = useSpring(mouseY, springConfig);
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  const [isOverIframe, setIsOverIframe] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      setCursorState(prev => ({ ...prev, isHidden: false }));
    };

    const handleMouseLeave = () => {
      setCursorState(prev => ({ ...prev, isHidden: true }));
    };

    // Interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [data-cursor="pointer"], input, textarea, [role="button"]'
    );
    const textElements = document.querySelectorAll(
      'h1, h2, h3, p, span, [data-cursor="text"]'
    );

    const handleElementEnter = () => {
      setCursorState(prev => ({ ...prev, isHovering: true }));
    };

    const handleElementLeave = () => {
      setCursorState(prev => ({ ...prev, isHovering: false }));
    };

    const handleTextEnter = () => {
      setCursorState(prev => ({ ...prev, isText: true }));
    };

    const handleTextLeave = () => {
      setCursorState(prev => ({ ...prev, isText: false }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementEnter);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    textElements.forEach(el => {
      el.addEventListener('mouseenter', handleTextEnter);
      el.addEventListener('mouseleave', handleTextLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);

      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementEnter);
        el.removeEventListener('mouseleave', handleElementLeave);
      });

      textElements.forEach(el => {
        el.removeEventListener('mouseenter', handleTextEnter);
        el.removeEventListener('mouseleave', handleTextLeave);
      });
    };
  }, [mouseX, mouseY]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Cursor Dot */}
      <motion.div
        ref={cursorDot}
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState.isHovering ? 60 : cursorState.isText ? 4 : 10,
          height: cursorState.isHovering ? 60 : cursorState.isText ? 20 : 10,
          backgroundColor: cursorState.isHovering ? 'rgba(147, 112, 219, 0.3)' : 'rgb(147, 112, 219)',
          opacity: cursorState.isHidden ? 0 : 1,
          borderRadius: cursorState.isText ? '2px' : '50%',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />

      {/* Cursor Ring */}
      <motion.div
        ref={cursorRing}
        className="fixed pointer-events-none z-[9998] rounded-full border-2"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: 'rgb(147, 112, 219)',
        }}
        animate={{
          width: cursorState.isHovering ? 80 : 40,
          height: cursorState.isHovering ? 80 : 40,
          borderWidth: cursorState.isHovering ? '1px' : '2px',
          opacity: cursorState.isHidden || cursorState.isText ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      />
    </>
  );
};

export default CustomCursor;
