A sinusoidal differential voltage signal is applied to the emitter-coupled pair shown in [Fig. 1] (identical npn transistors, tail current $I_{EE}$, output $I_{\text{out}} = I_{c1} - I_{c2}$; $V_T = 26$ mV).

(a) Determine the maximum allowable magnitude (peak amplitude) of the sinusoid such that the magnitude of the third harmonic in the output is less than 1 percent of the fundamental. To work this part, approximate the transfer characteristic of the pair with the first two terms of the Taylor series for the tanh function. Then assume that all the other harmonics in the output are negligible and that the output is approximately
$$I_{\text{out}}(t) = I_o(\sin\omega_o t + \delta\sin 3\omega_o t)$$
where δ = fractional third-harmonic distortion.

(b) Use SPICE to check your result.

(c) For the same sinusoidal input voltage amplitude, use SPICE to find the third harmonic distortion in the output if emitter resistors $R_E$ are added to each device such that $I_{E1}R_E = I_{E2}R_E = 100$ mV.

The bias current and transistor model are not specified; for the simulations use, for example, $I_{EE} = 1$ mA (so $R_E = 200\ \Omega$ in (c)), npn transistors with $I_S = 10^{-16}$ A, β = 100 and no Early effect, and a low signal frequency (e.g. 1 kHz).
