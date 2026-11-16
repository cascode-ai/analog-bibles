# Detailed solution - R570

**Approach.** With an ideal op amp, node X is held at 0 V at all times by feedback through $C_2$. The capacitor $C_1$ therefore sees a fixed voltage at its right plate and discharges through the switch resistance $R_{on}$ alone, which gives the time constant. The switch current is a decaying exponential, and integrating $i^2R_{on}$ over time gives the energy dissipated.

### Step 1 — The circuit in amplification mode

From the complete circuit:

- $S_1$ is off (the input is disconnected);
- $S_2$ is off ($C_2$ was shorted during sampling, so it starts discharged);
- $S_3$ is on and connects node A to ground through its on-resistance $R_{on}$.

The equivalent circuit is: $R_{on}$ from A to ground, $C_1$ from A to X, $C_2$ from X to $V_{out}$, and the op amp with its inverting input at X and its noninverting input grounded.

<!-- diagram: diagram-01.cir -->

**Initial conditions** at $t = 0^+$ (carried over from the sampling mode, since capacitor voltages cannot jump):

- voltage across $C_1$: $V_A - V_X = V_{in0}$;
- voltage across $C_2$: $V_{out} - V_X = 0$.

### Step 2 — Node X stays at virtual ground

The op amp is ideal (infinite gain) and has negative feedback through $C_2$. So it keeps its inverting input at the potential of the noninverting input:

$$V_X(t) = 0\quad\text{for all } t .$$

The op amp's output can source or sink whatever current is needed (through $C_2$) to do this. Hence $V_A(0^+) = V_X + V_{in0} = V_{in0}$: when $S_3$ closes, node A starts at $V_{in0}$, not at ground. The switch resistance prevents A from jumping to 0.

### Step 3 — Time constant

Because $V_X = 0$ is fixed, $C_1$ and $R_{on}$ form a simple series loop between ground (through $R_{on}$) and the virtual ground X. Let $i$ be the current flowing from A through $R_{on}$ to ground.

- **Ohm's law** for the switch: $i = V_A/R_{on}$.
- **Capacitor law** for $C_1$: the current leaving its A-side plate is $i = -C_1\,\dfrac{d(V_A - V_X)}{dt} = -C_1\,\dfrac{dV_A}{dt}$, since $V_X$ is constant.

Equate the two:

$$-C_1\frac{dV_A}{dt} = \frac{V_A}{R_{on}} \quad\Longrightarrow\quad \frac{dV_A}{dt} = -\frac{V_A}{R_{on}C_1}.$$

This first-order differential equation, with $V_A(0) = V_{in0}$, has the solution

$$V_A(t) = V_{in0}\,e^{-t/\tau}, \qquad \boxed{\tau = R_{on}C_1}.$$

$C_2$ does not appear. It only collects the charge that leaves $C_1$; it does not affect the voltage across $C_1$, because X is pinned at 0 V.

### Step 4 — The output waveform

The switch current is

$$i(t) = \frac{V_A(t)}{R_{on}} = \frac{V_{in0}}{R_{on}}\,e^{-t/\tau}.$$

Follow it around the loop. The charge leaving $C_1$'s left plate (through $R_{on}$) is matched by charge leaving its right plate at X. No current enters the op-amp input, so that current must come through $C_2$ from the op-amp output. $C_2$ therefore charges with the same current:

$$V_{out}(t) = V_X + \frac{1}{C_2}\int_0^t i\,dt' = \frac{1}{C_2}\cdot\frac{V_{in0}}{R_{on}}\cdot\tau\left(1 - e^{-t/\tau}\right) = \frac{C_1}{C_2}V_{in0}\left(1 - e^{-t/\tau}\right).$$

It settles to the expected $V_{out} = (C_1/C_2)V_{in0}$ with the same time constant $R_{on}C_1$. This is charge transfer: all of $C_1$'s charge $C_1V_{in0}$ ends up on $C_2$.

### Step 5 — Energy dissipated in the switch

The instantaneous power in the switch is $i^2R_{on}$. Integrate from 0 to ∞:

$$
\begin{aligned}
E &= \int_0^\infty i^2R_{on}\,dt = \int_0^\infty \frac{V_{in0}^2}{R_{on}^2}e^{-2t/\tau}R_{on}\,dt\\
&= \frac{V_{in0}^2}{R_{on}}\int_0^\infty e^{-2t/\tau}\,dt = \frac{V_{in0}^2}{R_{on}}\cdot\frac{\tau}{2}\\
&= \frac{V_{in0}^2}{R_{on}}\cdot\frac{R_{on}C_1}{2} = \frac12C_1V_{in0}^2 .
\end{aligned}
$$

$R_{on}$ cancels: the energy is the same for any switch resistance. A smaller $R_{on}$ gives a larger current for a shorter time, with the same total.

**Energy bookkeeping.** At $t = 0$, $C_1$ stores $\tfrac12C_1V_{in0}^2$. At the end it holds zero voltage (both plates at 0 V), so **all** of that energy is dissipated in the switch. The energy finally stored on $C_2$, $\tfrac12C_2(C_1V_{in0}/C_2)^2 = \tfrac12(C_1^2/C_2)V_{in0}^2$, is supplied by the op amp's output, not by $C_1$. No energy crosses node X, since the power there is $V_X\cdot i = 0$.

**Illustration** (values not given in the problem): with $R_{on} = 1$ kΩ, $C_1 = 1$ pF and $V_{in0} = 1$ V, $\tau = 1$ ns and $E = 0.5$ pJ.

### Result

$$\tau = R_{on}C_1 \quad (C_2\text{ does not enter}), \qquad E = \tfrac12C_1V_{in0}^2\ \ (\text{independent of } R_{on}).$$

With an ideal op amp, node X stays at 0 V, and $C_1$, charged to $V_{in0}$, discharges through $R_{on}$: $V_A(t) = V_{in0}e^{-t/(R_{on}C_1)}$. The current $i(t) = (V_{in0}/R_{on})e^{-t/\tau}$ flows through $C_1$ into X and on into $C_2$ (supplied by the op-amp output), so $V_{out}(t) = (C_1/C_2)V_{in0}(1 - e^{-t/\tau})$. The switch dissipates $\int_0^\infty i^2R_{on}\,dt = (V_{in0}^2/R_{on})(\tau/2) = \tfrac12C_1V_{in0}^2$, all the energy initially stored on $C_1$.

**Common mistake.** Treating X as a floating node and combining $C_1$ and $C_2$ in series or parallel, giving $\tau = R_{on}C_1C_2/(C_1 + C_2)$, $R_{on}(C_1 + C_2)$ or $R_{on}C_2$. The ideal op amp holds X at virtual ground, so $C_1$ alone is in the discharge loop with $R_{on}$.

**Common mistake.** Expecting the dissipated energy to depend on $R_{on}$ (for example "a smaller switch resistance dissipates less"). The current scales as $1/R_{on}$ and the duration as $R_{on}$, so $\int i^2R_{on}\,dt$ is independent of $R_{on}$.

**Common mistake.** Expressing the energy in terms of $C_2$ or the final output voltage, e.g. $\tfrac12C_2V_{out}^2$. That is the energy stored on $C_2$, which comes from the op amp's supply. The switch dissipates exactly the energy that $C_1$ held, $\tfrac12C_1V_{in0}^2$.
