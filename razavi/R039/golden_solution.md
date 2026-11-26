# Golden Solution - R039

## Reference answer

### Test circuit

The saturated MOSFET has current drive at G and AC ground at the source, drain and bulk. The junction capacitors carry no signal current because both ends are at AC ground. The model neglects $C_{GB}$ in saturation.

![Small-signal test circuit for the transit-frequency proof](/q/R039/solution-ft-test.svg)

### Current gain

At G, $I_{in}$ charges both gate capacitors. At D, the two blue arrows mark the incoming terms in the drain equation.

$$
I_{in}=j\omega(C_{GS}+C_{GD})V_{gs},
\qquad
I_{out}+j\omega C_{GD}V_{gs}=g_mV_{gs}.
$$

Near unity gain, the drain feedforward term is small if $C_{GD}\ll C_{GS}$. Taking $I_{out}\approx g_mV_{gs}$ and setting the current gain magnitude to one gives the textbook result.

$$
\left|\frac{I_{out}}{I_{in}}\right|\approx
\frac{g_m}{\omega(C_{GS}+C_{GD})},
\qquad
f_T\approx\frac{g_m}{2\pi(C_{GS}+C_{GD})}.
$$

## Grading notes

- +2 for gate current drive, AC-grounded source and drain, the gate and drain current relations, and the unity-gain condition. The textbook step $I_{out}=g_mV_{gs}$ is acceptable without further justification.
- +1 for a correct derivation with a missing justification, such as why the junction capacitors carry no signal current.
- 0 for restating the result with only a partial argument.
- −2 for asserting a different formula that includes junction capacitance or uses only $C_{GS}$, or for presenting a voltage-gain argument as the proof.
