export const handleDrag = (
  elementId: string,
  currentPosition: { x: number; y: number },
  handleShowProduct: (
    cloudPosition: { x: number; y: number },
    codePosition: { x: number; y: number }
  ) => void
) => {
  const targetElement = document.getElementById(elementId);

  if (targetElement) {
    const targetRect = targetElement.getBoundingClientRect();
    const targetPosition = {
      x: targetRect.left + targetRect.width / 2,
      y: targetRect.top + targetRect.height / 2,
    };

    const distanceX = Math.abs(currentPosition.x - targetPosition.x);
    const distanceY = Math.abs(currentPosition.y - targetPosition.y);

    if (distanceX < 50 && distanceY < 50) {
      handleShowProduct(currentPosition, targetPosition);
    }
  }
};
