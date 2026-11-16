# Golden Solution - G274

## Reference answer

$T \approx 55.3$, $v_o/i_i \approx -98.2$ kΩ, $R_{in} \approx 1.78$ kΩ, $R_{out} \approx 232$ Ω.

- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2\cdot180\mu\cdot100\cdot0.5\text{m}} = 4.243$ mS.
- y-parameter loading: $R_F$ across the input and across the output; $f = -1/R_F$.
- $a = -R_F\cdot g_m\cdot(R_L\|R_F) = -100\text{k}\times4.243\text{m}\times13.04\text{k} = -5.53$ MΩ; $T = 55.3$.
- $A = a/(1+T) = -98.2$ kΩ; $R_{in} = 100\text{k}/56.3 = 1.775$ kΩ; $R_{out} = 13.04\text{k}/56.3 = 231.5$ Ω.

## Grading notes

Four quantities. +2: $T$ 53–58, gain −97 to −99 kΩ, $R_{in}$ 1.72–1.83 kΩ, $R_{out}$ 225–238 Ω. +1: one quantity off by a slip, or the return ratio (63.6) reported as the loop gain with otherwise correct numbers. 0: two of four right. −2 (asserted as fact): positive transresistance, impedances multiplied by $(1+T)$, or $R_F$ loading omitted so that $T$ is off by more than 20% while claimed exact. A two-port $R_{in}$ computed without the $R_F$ loading (e.g., $R_F/(1 + 63.6) = 1.55$ kΩ) and given as the two-port result counts as that quantity wrong even if an "exact" 1.78 kΩ is also quoted; with $T$ also reported as 63.6, this leaves two of four right: 0.
