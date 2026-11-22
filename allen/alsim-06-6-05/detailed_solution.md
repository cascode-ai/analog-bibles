# Detailed solution - alsim-06-6-05

Each characteristic is measured in the closed-loop configuration that makes it observable while keeping the op amp's dc operating point defined. An open-loop op amp with gain in the thousands would sit at one rail. The op amp always carries its intended load $C_L$ (and $R_L$) and supplies. For the bench version, the same configurations are kept, but the ideal sources, probes and dc sweeps of the simulator are replaced by real instruments, and the measurement must cope with offset and with nodes that cannot be probed.

### Step 1 — (a) Slew rate: follower with a large step

<!-- diagram: diagram-01.cir -->

Connect the op amp as a unity-gain follower, with the output tied to the inverting input, the load $C_L$, $R_L$ at the output, and a pulse source at the non-inverting input. Use a transient analysis with a large step: a few volts, inside the ICMR so the input stage stays on, with edges much faster than the op amp. The step must be large enough that the differential input saturates the input stage. The output then ramps linearly, and

$$
SR=\left.\frac{dv_{out}}{dt}\right|_{\text{linear ramp}},
$$

read separately on the rising and falling edges, because the two are often limited by different currents ($I_5/C_c$ or the output-stage current into $C_L$). Plotting the supply current at the same time shows which current is doing the slewing.

### Step 2 — (b) Transient response: follower with a small step

Use the same follower (diagram above), but with a small step, typically 0.1–0.2 V, small enough that the op amp stays linear and does not slew. From the output read the rise time, the overshoot and ringing, and the settling time to the specified error band (e.g. 1%). The overshoot is a direct check of the phase margin: a two-pole loop with about 60° of phase margin overshoots by only a few percent.

### Step 3 — (c) ICMR: follower with a dc sweep

<!-- diagram: diagram-02.cir -->

Keep the follower and sweep the dc input $v_{IN}$ over the whole supply range (dc analysis). Inside the ICMR the output follows the input with unit slope:

$$
\frac{dv_{out}}{dv_{in}}\approx1 .
$$

At each end of the range a device of the input stage leaves saturation, and the curve bends away from the unity-slope line. Also plot the current of the tail device (or of the input transistors). It shows where the input stage turns off or a current source collapses, which locates the limit more sharply than the output alone. The ICMR is the input range between these two knees.

### Step 4 — (d) Output swing: inverting gain of −10 with a dc sweep

<!-- diagram: diagram-03.cir -->

Connect an inverting amplifier with $R_2=10R_1$ (gain −10), choosing $R_1$, and hence $R_2$, much larger than $R_L$ so that the feedback network does not load the output, and keep the real $R_L$ (and $C_L$) at the output. Sweep $v_{IN}$ in a dc analysis. In the linear range

$$
v_{out}=-\frac{R_2}{R_1}v_{in}=-10\,v_{in},
$$

and the output swing is the range of $v_{out}$ over which the slope stays at −10. Where the output devices can no longer deliver the load current, the curve flattens. Using a gain of 10 instead of the follower keeps the input near ground (well inside the ICMR) while the output is driven to the rails, so the ICMR does not mask the output limit. The load must be present, because the current it demands sets the swing limits.

### Step 5 — Changes for the bench measurement, and why

| Simulation | Bench | Reason |
|---|---|---|
| Ideal pulse source, zero rise time, ideal amplitude | Pulse generator with finite rise time and 50-Ω output, properly terminated; amplitude checked on the scope | The edges must still be much faster than the op amp, and the generator's loading and reflections must not distort the step. |
| Ideal output node | Probe or fixture capacitance (≈ 10 pF or more) added to the output; use low-capacitance or active probes, or a buffer, and count the probe in $C_L$ | The probe is part of the load. It changes the slew rate, overshoot and settling, and at high-impedance nodes it can change the circuit itself. |
| dc sweep | Slow ramp or triangle wave displayed in X–Y mode, or stepped dc with a voltmeter | Instruments do not perform a dc sweep. The ramp must be slow compared with the op amp's response so that the result is quasi-static. |
| Only systematic offset | Random offset shifts the ICMR and swing curves; read slopes and differences, or null the offset first | Mismatch in a real chip adds an input offset that the nominal simulation does not contain. |
| Tail current plotted directly | Monitor the supply currents $I_{DD}$, $I_{SS}$ instead | Internal device currents cannot be probed on a chip, but the supply current changes when the input stage cuts off. |
| Ideal supplies | Bypass capacitors at the supply pins, clean grounding, short-circuit and overdrive protection; repeat over temperature and several samples | Real supplies have impedance and noise, overdriving the input or shorting the output can damage the part, and process spread and temperature matter. |

The configurations themselves (follower for SR, transient response and ICMR; inverting gain of 10 with the real load for the swing) stay the same. What changes is how the stimulus is applied and how the response is observed, because on the bench the instruments become part of the circuit.
