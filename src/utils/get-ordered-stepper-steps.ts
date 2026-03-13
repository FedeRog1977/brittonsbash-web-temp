export const getOrderedStepperSteps = <StepperStep extends string>(
  stepperStepLabels: Record<StepperStep, string>,
  stepperStepOrder: Record<StepperStep, number>,
): string[] =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  (Object.entries(stepperStepOrder) as Array<[StepperStep, number]>)
    .sort(([_stepA, orderA], [_stepB, orderB]) => (orderA > orderB ? 1 : -1))
    .map(([step]) => stepperStepLabels[step]);
