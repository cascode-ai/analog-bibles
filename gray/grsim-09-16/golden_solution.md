# Golden Solution - grsim-09-16

## Reference answer

Hand-analysis results (what the simulation should approximately reproduce):
(a) The pnp pair runs at 10 μA per side, $g_{m1} = 10\text{ μA}/26\text{ mV} = 0.385$ mA/V; with the mirror load the stage transconductance is $g_{m1}$. With the 10-pF Miller capacitor, $\omega_u = g_{m1}/C = 3.85 \times 10^7$ rad/s, $f_u ≈ 6.1$ MHz. Slew rate $= I_{EE}/C = 20\text{ μA}/10\text{ pF} = 2$ V/μs.
(b) In the follower, the 10-V input step saturates the input stage; $V_o$ ramps linearly at 2 V/μs from −5 V, reaching ≈ +5 V at ≈ 5 μs, then settles exponentially with $\tau = 1/\omega_u ≈ 26$ ns (the linear region begins when the error is ≈ SR/$\omega_u$ ≈ 52 mV); it stays at +5 V up to 20 μs.
(c) Expected simulation with the given models (which contain no junction or diffusion capacitances, so the 10-pF capacitor is the only capacitance): open-loop dc gain of order $10^6$ (≈ 120 dB: first stage ≈ $g_{m1} \times 0.8$ MΩ, second stage ≈ 5000), a single dominant pole of a few Hz, unity-gain frequency ≈ 6 MHz; step response slewing at ≈ ±2 V/μs with ≈ 5-μs transition. Finite β causes only percent-level differences (mirror error ≈ $2/\beta$, base current of $Q_5$).

## Grading notes

The hand results must match: $f_u$ ≈ 6.1 MHz (±10%), SR ≈ 2 V/μs, a ≈ 5-μs linear ramp followed by fast settling. A correct simulation shows a unity-gain frequency of ≈ 5.5–6.5 MHz with −20 dB/dec roll-off and ≈ −90° phase around it, and a step response with slew rates of ≈ 2 V/μs (±10%) in both directions and settling within ≈ 0.1–0.2 μs after the ramp. Simulations that show substantially different behaviour (e.g. a slew rate of 30 V/μs or an exponential step response) indicate a wrong netlist (capacitor placement, current-source values) or a wrong step amplitude.
