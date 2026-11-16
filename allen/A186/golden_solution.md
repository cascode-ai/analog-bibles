# Golden Solution - A186

## Reference answer

$A_v \approx -3.5\times10^2$ V/V (exact nodal analysis −351 V/V; the usual estimate $-g_{m1}R_{out}$ gives ≈ −400 V/V).

- Currents: M6 (4/1) carries the 20-µA reference; M5 (4/1) and M3 (4/1) mirror 20 µA, M4 (40/1) mirrors 200 µA. M5's 20 µA biases the diode M7, whose gate–source voltage sets the gate of the cascode M2. M2 carries M3's 20 µA, and M1 carries $I_{D1} = I_{D2}+I_{D4}$ = 220 µA (folded current from M4 into the M1–M2 node).
- $g_{m1} = \sqrt{2\cdot110\cdot4\cdot220}$ µS = 440 µS; $r_{ds1}$ = 1/(0.04·220 µA) = 114 kΩ; $r_{ds4}$ = 1/(0.05·200 µA) = 100 kΩ; $g_{m2} = \sqrt{2\cdot110\cdot4\cdot20}$ µS = 133 µS, $r_{ds2}$ = 1.25 MΩ; $r_{ds3}$ = 1 MΩ.
- Node between M1 and M2: $R_A = r_{ds1}\|r_{ds4}$ = 53.2 kΩ. Cascode branch: $r_{ds2} + R_A(1+g_{m2}r_{ds2})$ ≈ 10.1 MΩ. $R_{out} = r_{ds3}\|10.1\ \mathrm{M\Omega}$ ≈ 0.91 MΩ.
- With the output shorted, the resistance into M2's source is ≈ $1/g_{m2}$ ≈ 7.5 kΩ, comparable to $R_A$, so only ≈ 88% of $g_{m1}v_{in}$ reaches the output: $G_m \approx 0.876g_{m1}$ and $A_v = -G_mR_{out}$ ≈ −351 V/V. Neglecting this current division, $A_v \approx -g_{m1}R_{out}$ ≈ −400 V/V; neglecting also the cascode branch, $-g_{m1}r_{ds3}$ = −440 V/V.

## Grading notes

+2: currents identified (M1 220 µA, M2/M3 20 µA, M4 200 µA), $g_{m1}$ ≈ 440 µS, $R_{out}$ ≈ 0.9 MΩ, and a gain between −340 and −420 V/V (both the exact value and the $-g_{m1}R_{out}$ estimate are accepted). +1: gain ≈ −440 V/V from $-g_{m1}r_{ds3}$ with correct currents, or a correct method with one current misread. 0: method right but M1's current taken as 20 µA (gain ≈ −130 V/V) with the rest consistent. −2 (asserted as fact): M4's current ignored or added to the output branch, the circuit treated as a simple common-source stage with $r_{ds1}\|r_{ds3}$, or a gain of order $(g_mr_{ds})^2$. An answer that notes that with the given sizes M1 would in fact not be saturated ($V_{DS1} = V_{GS7} - V_{GS2}$ ≈ 1.30 − 1.00 = 0.30 V < $V_{DS1(sat)}$ = 1.0 V at 220 µA) and then gives the gain under the stated assumption loses nothing; one that only points this out without the gain under the assumption is at most 0.
