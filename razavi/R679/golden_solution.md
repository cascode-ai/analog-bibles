# Golden Solution - R679

## Reference answer

$A_v = V_{out}/V_{in} = -g_{m1}/g_{m3} = -W_1/W_3$. The gain depends only on the width ratio: $v_{sat}$, $C_{ox}$, L and $I_{SS}$ all cancel.
- $M_3$ and $M_4$ are NMOS devices with gate and drain at $V_{DD}$ and the source at the output, i.e., diode-connected loads. With λ = γ = 0, each presents $1/g_{m3}$ at its output node.
- Differential half circuit: $M_1$ driving a load of $1/g_{m3}$, so $A_v = -g_{m1}/g_{m3}$ for the differential input and output.
- Velocity saturation: $g_m = WC_{ox}v_{sat}$ for every device (all NMOS, same $v_{sat}$), so $A_v = -\dfrac{W_1C_{ox}v_{sat}}{W_3C_{ox}v_{sat}} = -\dfrac{W_1}{W_3}$. With different saturation velocities it would read $-W_1v_{sat,1}/(W_3v_{sat,3})$.
- For comparison, the square law gives $-\sqrt{(W/L)_1/(W/L)_3}$.

## Grading notes

- +2: $-g_{m1}/g_{m3} = -W_1/W_3$, with the loads recognized as diode-connected NMOS (impedance $1/g_{m3}$) and $g_m = WC_{ox}v_{sat}$.
- +1: correct magnitude with the sign unclear; $-W_1v_{sat1}/(W_3v_{sat3})$ left unsimplified; or M3/M4 misread as diode-connected PMOS but the same form reached.
- +1 also: the correct final result $-W_1/W_3$, but the stated velocity-saturation law carries an error common to all devices that cancels in the ratio (e.g., $g_m = C_{ox}(W/L)v_{sat}$ with a spurious 1/L); list it as a minor false claim.
- 0: correct half-circuit method, but a wrong $g_m$ expression for one device (or wrong for the input and load devices in different ways), so that the final ratio is wrong.
- -2 (asserted as fact): loads treated as ideal current sources (infinite gain) or as resistors of unspecified value; the square-law ratio $\sqrt{(W/L)_1/(W/L)_3}$ given as the answer; or a gain that depends on $I_{SS}$.
