# Golden Solution - A472

## Reference answer

One valid design (bits $b_0$ = MSB … $b_9$ = LSB):
- MSB array (top node = buffer input): $16C$ ($b_0$), $8C$ ($b_1$), $4C$ ($b_2$), $2C$ ($b_3$), $C$ ($b_4$); total $31C$.
- LSB array: $16C$ ($b_5$), $8C$ ($b_6$), $4C$ ($b_7$), $2C$ ($b_8$), $C$ ($b_9$), plus a terminating capacitor $C$ (bottom plate to ground); total $32C$.
- Attenuating (scaling) capacitor between the LSB-array top node and the MSB-array top node: $C_s = \frac{32}{31}C \approx 1.032C$.
- Output: $v_{OUT} = V_{REF}\sum_{i=0}^{9} b_i/2^{i+1}$.

Derivation:
- $C_s$ in series with the whole LSB side (32C) must look like a unit capacitor $C$ terminating the MSB array (so that the MSB node sees $31C + C = 32C$): $\frac{1}{C_s} + \frac{1}{32C} = \frac{1}{C}$ → $C_s = \frac{32}{31}C$.
- Thevenin equivalent of the LSB side: $V_L = \frac{V_{REF}}{32}\sum_{i=5}^{9} b_i 2^{9-i}$ behind 32C; through $C_s$ this is a source $V_L$ behind an effective capacitance $C$ at the MSB node.
- Charge balance at the MSB node: $v_{OUT} = \frac{C V_{REF}\sum_{i=0}^{4} b_i 2^{4-i} + C V_L}{32C} = V_{REF}\sum_{i=0}^{4}\frac{b_i}{2^{i+1}} + \frac{V_L}{32}$, and $V_L/32 = V_{REF}\sum_{i=5}^{9} b_i/2^{i+1}$.
- Element spread is 16 (versus 512 for a single 10-bit binary array) and the total capacitance is about $64C$ instead of $1024C$.

## Grading notes

+2: any design that yields $v_{OUT} = V_{REF}\sum b_i 2^{-(i+1)}$: binary MSB and LSB arrays, a terminating capacitor equal to the LSB unit, and a series capacitor such that its series combination with the total LSB-side capacitance equals the MSB-array unit capacitor (for unit C in both arrays: $C_s = 32C/31$), with C the smallest capacitor and a check of the output. Scaled versions are fine if the smallest capacitor is called C. +1: correct structure and $C_s$ but the output check missing, or a minor slip in one capacitor value. 0: correct arrays but $C_s$ wrong by a structural slip (e.g. $C_s = 31C/30$ from omitting the terminating capacitor) with otherwise sound reasoning. −2 (asserted as fact): $C_s = C/32$ or $C_s = 2C/31$ with the stated arrays (wrong attenuation), arrays not binary, or a single 10-bit array.
