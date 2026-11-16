A band-gap reference circuit is shown in [Fig. 1]. Assume $\beta_F \to \infty$, $V_A \to \infty$, $I_{S1} = 1\times10^{-15}$ A and $I_{S2} = 8\times10^{-15}$ A (at 25 °C). Assume the op amp is ideal except for a possibly nonzero offset voltage $V_{OS}$, which is modeled by the voltage source in series with its inverting input, with the polarity shown. $R_1 = R_3 = 1$ kΩ; $R_2$ is adjustable.

Define the target voltage as the value of $V_{OUT}$ for which $dV_{OUT}/dT = 0$ at $T = 25$ °C when $V_{OS} = 0$. In the actual circuit, $V_{OS} = 30$ mV, and $R_2$ is trimmed (with this offset present) so that $V_{OUT}$ equals the target voltage at 25 °C. Find $dV_{OUT}/dT$ at $T = 25$ °C.

Model: $V_{BE} = V_T\ln(I_C/I_S)$ with $I_S \propto T^{\gamma}\exp(-V_{G0}/V_T)$, $\gamma = 3.2$, $V_{G0} = 1.205$ V; $V_T = 25.7$ mV at 25 °C ($T = 298$ K); $V_{OS}$ and the resistors are temperature independent.
