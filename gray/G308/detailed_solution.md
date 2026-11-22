# Detailed solution - G308

A 10-V input step is far larger than the linear range of a bipolar differential pair, so the input stage saturates. All of $I_{EE}$ then charges the 0.05-μF capacitor, and the output ramps at the slew rate rather than following the small-signal exponential. First identify the op-amp inputs for the follower connection, then find the slew rate and its sign. The ramp then gives the waveform up to 20 μs, and small-signal settling takes over only near the final value.

### Step 1 — Which input is noninverting

Follow a rise $\Delta V$ at the base of $Q_1$ through the circuit:

- the pnp $Q_1$ conducts less;
- the $Q_3$–$Q_4$ mirror makes $Q_4$ sink less;
- $Q_2$'s extra current therefore raises the base of $Q_5$;
- with the given gain of $-500$, $V_o$ falls.

So the base of $Q_1$ is the inverting input and the base of $Q_2$ the noninverting input. In the unity-gain follower, $V_o$ is fed back to the base of $Q_1$ and the step $V_i$ drives the base of $Q_2$.

### Step 2 — The input stage saturates

At $t=0^+$ the output is still at $-5$ V while the input is at $+5$ V, so the pair sees a 10-V differential input. A bipolar pair splits its tail current according to $I_{C1}/I_{C2}=\exp(\Delta V_{EB}/V_T)$, and is fully switched for $|\Delta V|$ of a few $V_T$ (about 0.1 V). Here $Q_2$, whose base is raised, cuts off, and $Q_1$ carries all of $I_{EE}=20$ μA. $Q_4$ copies this current and pulls it out of the base node of $Q_5$, while $Q_2$ supplies nothing, so
$$
\frac{dV_{b5}}{dt}=-\frac{I_{EE}}{C}=-\frac{20\ \mu\mathrm A}{0.05\ \mu\mathrm F}=-400\ \mathrm{V/s}.
$$

### Step 3 — Output slew rate

The stages after $Q_5$'s base are not current-limited and multiply the node voltage by $-500$:
$$
\frac{dV_o}{dt}=(-500)\left(-400\ \mathrm{V/s}\right)=+2\times10^5\ \mathrm{V/s}=+0.2\ \mathrm{V/\mu s}.
$$
The slope is positive, so the output moves toward the new input as negative feedback requires. A falling step would give the same rate with the opposite sign, because then $Q_2$ carries the full 20 μA into the node.

### Step 4 — Waveform from 0 to 20 μs

As long as the error $V_i-V_o$ is more than a few $V_T$, the current stays at $I_{EE}$ and the output is a straight line:
$$
V_o(t)=-5\ \mathrm V+\left(0.2\ \mathrm{V/\mu s}\right)t .
$$

| $t$ (μs) | 0 | 5 | 10 | 15 | 20 |
|---|---|---|---|---|---|
| $V_o$ (V) | −5 | −4 | −3 | −2 | −1 |

At 20 μs the output is at $-1$ V and still slewing; the error is 6 V. At this rate it would reach $+5$ V only at $t=10\ \mathrm V/(0.2\ \mathrm{V/\mu s})=50$ μs.

![Vo versus t from 0 to 20 μs: input step from −5 V to +5 V at t = 0, output a straight ramp at 0.2 V/μs from −5 V, through −3 V at 10 μs, to −1 V at 20 μs, still slewing](/q/G308/solution-waveforms.svg)

### Step 5 — End of slewing (after 50 μs)

The small-signal loop gain is $a(j\omega)\approx500\,g_{m1}/(j\omega C)$ with $g_{m1}=10\ \mu\mathrm A/26\ \mathrm{mV}=0.3846$ mA/V. With feedback factor 1, the closed-loop pole is at the unity-gain frequency:
$$
\omega_u=\frac{500\,g_{m1}}{C}=3.85\times10^6\ \mathrm{rad/s},\qquad \tau=\frac1{\omega_u}=0.26\ \mu\mathrm s .
$$
The pair leaves saturation when the error falls to about $SR/\omega_u=52$ mV. After that, the output approaches $+5$ V exponentially with this 0.26-μs time constant, which is negligible compared with the 50-μs ramp. Neither part of this happens within the 0–20 μs window.
