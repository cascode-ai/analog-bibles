A binary-weighted DAC using a charge amplifier is shown in [Fig. 1]: capacitors $C$, $2C$, …, $2^{N-1}C$ drive the inverting input of the op amp, $C_X$ is the feedback capacitor and the switch across it is the reset switch. At the beginning of the digital-to-analog conversion, all capacitors are discharged. Then, if a bit is 1, its capacitor is connected to $V_{REF}$ and if the bit is 0, the capacitor is connected to ground; bit $b_0$ (MSB) controls $2^{N-1}C$ and bit $b_{N-1}$ (LSB) controls $C$. Design $C_X$ so that the magnitude of the output is

$|v_{OUT}| = \left(\dfrac{b_0}{2} + \dfrac{b_1}{4} + \cdots + \dfrac{b_{N-1}}{2^N}\right)V_{REF}$,

and state the polarity of $v_{OUT}$.
