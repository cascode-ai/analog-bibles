The ac schematic of a low-input-impedance common-base amplifier is shown in [Fig. 1]: the current source $i_s$ with shunt resistance $R_S$ drives the emitter of $Q_1$ (base grounded); the collector of $Q_1$ has a 5-kΩ load and drives the base of the common-emitter transistor $Q_2$.

(a) Calculate the equivalent noise voltage and current generators of this circuit at the emitter of $Q_1$ using $I_{C1} = I_{C2} = 1$ mA, $r_{b1} = r_{b2} = 0$, $\beta_1 = \beta_2 = 100$, $f_{T1} = f_{T2} = 400$ MHz ($C_\mu$ negligible). Neglect flicker noise but include capacitive effects in the transistors. Use SPICE to check your result.

(b) If $R_S = 5$ kΩ, and later stages limit the bandwidth to a sharp cutoff at 150 MHz, calculate the value of $i_S$ giving an output signal-to-noise ratio of 10 dB.

Use $4kT = 1.66\times10^{-20}$ V·C, $q = 1.6\times10^{-19}$ C and $kT/q = 26$ mV.
