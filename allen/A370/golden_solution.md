# Golden Solution - A370

## Reference answer

For an inverting comparator the output goes low when the input goes high; with the input $v_{in}$ applied to the inverting terminal (reference at the noninverting terminal), every curve is the mirror image of the noninverting one.
- Ideal transfer curve: $v_O = V_{OH}$ for $v_{in} < 0$ (i.e. $v_P - v_N > 0$) and $v_O = V_{OL}$ for $v_{in} > 0$, with a vertical (infinite-gain) step at $v_{in} = 0$ going from $V_{OH}$ down to $V_{OL}$.
- Finite gain: $v_O = V_{OH}$ for $v_{in} \le V_{IL}'$, a straight line of negative slope $-A_v = -(V_{OH}-V_{OL})/(V_{IH}-V_{IL})$ through the transition region, and $v_O = V_{OL}$ for $v_{in} \ge V_{IH}'$ (the transition region of width $V_{IH}-V_{IL}$ is centred on zero input, the output falling as the input rises).
- With offset: the same falling finite-gain curve shifted horizontally by $V_{OS}$ (the transition is centred at $v_{in} = \pm V_{OS}$, sign unknown), so the output does not cross its midpoint at zero input.
- Time response: an input step rising from $V_{IL}$ to $V_{IH}$ produces, after a delay, an output falling from $V_{OH}$ to $V_{OL}$ (or a falling input gives a rising output); $t_p$ is measured from the input crossing $(V_{IH}+V_{IL})/2$ to the output crossing $(V_{OH}+V_{OL})/2$, exactly as before but with the output transition inverted.

## Grading notes

+2: all four inverted plots described correctly: ideal step from $V_{OH}$ (negative input) to $V_{OL}$ (positive input); finite-gain curve with negative slope $-A_v$ between the two saturation levels; the offset curve as a horizontally shifted version of it; and the timing diagram with a rising input and a falling output (or vice versa) with $t_p$ measured between the 50 % points. Plotting against $v_P - v_N$ with the curves left unchanged but stating that the inverting input carries the signal is acceptable only if the inversion with respect to the input signal is made explicit. +1: three of the four correct, or all four with an imprecision (e.g., delay reference points not stated). 0: only the transfer curves or only the timing diagram given correctly. −2 (asserted as fact): the noninverting curves reproduced unchanged as the inverting ones, the output rising with the input, or $t_p$ defined between the start of the input and the end of the output transition.
