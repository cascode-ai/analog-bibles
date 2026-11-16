# Golden Solution - G146

## Reference answer

$V_{out} = |V_{in}|$: $V_{out} = -V_{in}$ for $V_{in} < 0$ and $V_{out} = +V_{in}$ for $V_{in} > 0$ (a full-wave precision rectifier / absolute-value circuit).

- The diode points from the op-amp output to the $V_{out}$ node (anode at the op-amp output), so it can only carry current from the op amp into the $V_{out}$ node.
- $V_{in} < 0$: the inverting configuration needs a current $|V_{in}|/1\,\mathrm{k\Omega}$ flowing from the $V_{out}$ node through the feedback resistor, the virtual-ground node and the input resistor into the source. The diode conducts it in its forward direction, the feedback loop is closed, $V_- = 0$, and $V_{out} = -(1\,\mathrm{k\Omega}/1\,\mathrm{k\Omega})V_{in} = -V_{in} > 0$. The diode drop is inside the loop, so it does not appear in $V_{out}$.
- $V_{in} > 0$: the required current would have to flow backwards through the diode, so no current can flow in the two resistors (the output terminal is unloaded). With zero current, $V_- = V_{in}$ and $V_{out} = V_- = V_{in}$. The op amp sees $V_+ - V_- = -V_{in} < 0$ and its output saturates at the negative rail, which keeps the diode reverse-biased.
- At $V_{in} = 0$, $V_{out} = 0$. The transfer characteristic is a "V" with slopes $-1$ and $+1$.

## Grading notes

+2: $V_{out} = |V_{in}|$ with both regions explained: inverting gain $-1$ through the conducting diode for $V_{in} < 0$; for $V_{in} > 0$ the diode is off, no resistor current, so $V_{out} = V_{in}$ through the resistors (op amp saturated low). +1: both regions right but the $V_{in} > 0$ reasoning sketchy, or the diode drop wrongly said to appear only as a small offset while the conclusion stays $|V_{in}|$. 0: only the $V_{in} < 0$ region right, with the other region left open or said to be 0 V without a confident wrong mechanism. -2 (asserted as fact): diode direction reversed (giving $V_{out} = -V_{in}$ only for $V_{in} > 0$), $V_{out} = 0$ for $V_{in} > 0$ asserted, $V_{out} = -V_{in}$ for all inputs, or a gain of 2.
