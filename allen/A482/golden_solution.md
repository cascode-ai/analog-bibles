# Golden Solution - A482

## Reference answer

Principle: a successive-approximation ADC whose DAC is the two-level resistor string with a capacitive subtraction. In every clock period the comparator compares $V_{Analog}$ with $V_{DAC} = V_1 - V_2 = (8A + 4B + 2C + D)V_{REF}/16$; $v_X = [V_{Analog} - V_{DAC}]/2$, and the output is low when $V_{Analog} > V_{DAC}$, high when $V_{Analog} < V_{DAC}$.

- Taps: $V_1 = (2A + B + 1)V_{REF}/4$ (one of $V_{REF}$, $\frac34$, $\frac12$, $\frac14V_{REF}$); $V_2 = (4 - 2C - D)V_{REF}/16$ (one of $\frac{4}{16}$, $\frac{3}{16}$, $\frac{2}{16}$, $\frac{1}{16}V_{REF}$), so $V_1 - V_2 = (8A + 4B + 2C + D)V_{REF}/16$.
- $\phi_1$ (0 to $T/2$): the op amp is in unity feedback, so $v_X$ sits at virtual ground (its offset is stored on the capacitors, auto-zero); the $V_{Analog}$ capacitor's left plate is grounded and the second capacitor ($V_T$ node) is charged to $V_1$.
- $\phi_2$ ($T/2$ to $T$): the feedback switch opens (comparator mode), the first capacitor's left plate goes to $V_{Analog}$ and the $V_T$ node to $V_2$, so $\Delta v_X = [C V_{Analog} + C(V_2 - V_1)]/2C = [V_{Analog} - (V_1 - V_2)]/2$; the comparator output is latched by the SAR at the end of $\phi_2$.
- Period 1: SAR sets $ABCD = 1000$ ($V_{DAC} = V_{REF}/2$); keep $A = 1$ if the output is low ($V_{Analog} > V_{REF}/2$), else reset $A = 0$.
- Period 2: set $B = 1$ ($V_{DAC} = A\cdot V_{REF}/2 + V_{REF}/4$) and decide $B$.
- Period 3: set $C = 1$ (adds $V_{REF}/8$) and decide $C$.
- Period 4: set $D = 1$ (adds $V_{REF}/16$) and decide $D$; after four clock periods ($4T$) the word $ABCD$ is in the register (a further period may be used to transfer the result and reset). $V_{Analog}$ is sampled anew in every $\phi_2$, so it must be held constant (external sample-and-hold) during the conversion.

Error sources: op amp/comparator finite gain, gain-bandwidth, slew rate and settling within $T/2$, and comparator resolution (the difference appears halved at $v_X$; ½ LSB at the input is only $V_{REF}/64$ there); offset is largely removed by the $\phi_1$ auto-zero (only a residual remains); resistor mismatch (string taps, the $R$ to $R/4$ ratio) and mismatch between the two capacitors $C$ (gain error between $V_{Analog}$ and $V_{DAC}$); switch on-resistance (RC settling) and charge injection/clock feedthrough, especially from the $\phi_1$ feedback switch onto $v_X$; parasitic capacitances (at $v_X$ they attenuate the comparator input, bottom-plate parasitics load the taps); reference accuracy, stability and loading of the string; noise ($kT/C$, comparator noise); and a changing input without sample-and-hold.

## Grading notes

+2: identifies that $v_X$ is proportional to $V_{Analog} - (V_1 - V_2)$ with $V_1 - V_2$ the binary-weighted 4-bit DAC value, the auto-zero role of $\phi_1$, the bit-by-bit SAR sequence (MSB first, one bit per clock period, 4 periods), the comparator decision rule, and lists the main error sources (amplifier/comparator dynamics and resolution, resistor and capacitor matching, switch effects, parasitics, reference). +1: correct operation with a thin error list, or the $V_1 - V_2$ subtraction stated without deriving the tap values. 0: a generic SAR description without the circuit-specific charge operation, or only an error list. −2 (asserted as fact): a wrong mechanism (e.g. $V_{Analog}$ compared with $V_1 + V_2$, a flash-type parallel conversion, LSB-first decisions).
