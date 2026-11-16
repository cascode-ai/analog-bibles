# Detailed solution - R570

**Approach.** The ideal op amp holds X at 0 V through the feedback capacitor $C_2$, so $C_1$ discharges through the switch resistance $R_{on}$ alone, which gives the time constant. Integrating $i^2R_{on}$ of the decaying switch current gives the dissipated energy.

### Step 1 — The circuit in amplification mode

$S_1$ and $S_2$ are off and $S_3$ is on, so $R_{on}$ connects A to ground, $C_1$ runs from A to X, and $C_2$ (discharged during sampling) runs from X to $V_{out}$.

<!-- diagram: diagram-01.cir -->

At $t = 0^+$ the capacitor voltages carry over from the sampling mode: $V_A - V_X = V_{in0}$ across $C_1$ and $V_{out} - V_X = 0$ across $C_2$. The ideal op amp with negative feedback through $C_2$ keeps

$$V_X(t) = 0\quad\text{for all } t ,$$

sourcing or sinking whatever current this takes through $C_2$. Hence $V_A(0^+) = V_{in0}$: when $S_3$ closes, $R_{on}$ keeps A from jumping to ground.

### Step 2 — Time constant

With $V_X$ fixed, $C_1$ and $R_{on}$ form a series loop between ground and the virtual ground X. With $i$ the current from A through $R_{on}$ to ground, $i = V_A/R_{on}$ and $i = -C_1\,d(V_A - V_X)/dt = -C_1\,dV_A/dt$:

$$-C_1\frac{dV_A}{dt} = \frac{V_A}{R_{on}} \quad\Longrightarrow\quad \frac{dV_A}{dt} = -\frac{V_A}{R_{on}C_1}.$$

With $V_A(0) = V_{in0}$:

$$V_A(t) = V_{in0}\,e^{-t/\tau}, \qquad \boxed{\tau = R_{on}C_1}.$$

$C_2$ does not appear: it only collects the charge that leaves $C_1$, and cannot affect the voltage across $C_1$ because X is pinned at 0 V.

### Step 3 — The output waveform

The switch current is

$$i(t) = \frac{V_A(t)}{R_{on}} = \frac{V_{in0}}{R_{on}}\,e^{-t/\tau}.$$

The same current leaves $C_1$'s right plate at X, and since no current enters the op amp it must come through $C_2$ from the op-amp output, so

$$V_{out}(t) = V_X + \frac{1}{C_2}\int_0^t i\,dt' = \frac{1}{C_2}\cdot\frac{V_{in0}}{R_{on}}\cdot\tau\left(1 - e^{-t/\tau}\right) = \frac{C_1}{C_2}V_{in0}\left(1 - e^{-t/\tau}\right),$$

which settles to the expected $(C_1/C_2)V_{in0}$ with the same time constant $R_{on}C_1$: all of $C_1$'s charge $C_1V_{in0}$ ends up on $C_2$.

### Step 4 — Energy dissipated in the switch

$$
\begin{aligned}
E &= \int_0^\infty i^2R_{on}\,dt = \int_0^\infty \frac{V_{in0}^2}{R_{on}^2}e^{-2t/\tau}R_{on}\,dt\\
&= \frac{V_{in0}^2}{R_{on}}\int_0^\infty e^{-2t/\tau}\,dt = \frac{V_{in0}^2}{R_{on}}\cdot\frac{\tau}{2}\\
&= \frac{V_{in0}^2}{R_{on}}\cdot\frac{R_{on}C_1}{2} = \frac12C_1V_{in0}^2 .
\end{aligned}
$$

$R_{on}$ cancels: a smaller $R_{on}$ gives a larger current for a shorter time, with the same total.

**Energy bookkeeping.** At $t = 0$, $C_1$ stores $\tfrac12C_1V_{in0}^2$; at the end both its plates are at 0 V, so **all** of that energy is dissipated in the switch. The energy finally on $C_2$, $\tfrac12C_2(C_1V_{in0}/C_2)^2 = \tfrac12(C_1^2/C_2)V_{in0}^2$, is supplied by the op amp's output, not by $C_1$; no energy crosses X, where the power is $V_X\cdot i = 0$.

**Illustration** (values not given in the problem): with $R_{on} = 1$ kΩ, $C_1 = 1$ pF and $V_{in0} = 1$ V, $\tau = 1$ ns and $E = 0.5$ pJ.

### Result

$$\tau = R_{on}C_1 \quad (C_2\text{ does not enter}), \qquad E = \tfrac12C_1V_{in0}^2\ \ (\text{independent of } R_{on}).$$

With an ideal op amp, node X stays at 0 V, and $C_1$, charged to $V_{in0}$, discharges through $R_{on}$: $V_A(t) = V_{in0}e^{-t/(R_{on}C_1)}$. The current $i(t) = (V_{in0}/R_{on})e^{-t/\tau}$ flows through $C_1$ into X and on into $C_2$ (supplied by the op-amp output), so $V_{out}(t) = (C_1/C_2)V_{in0}(1 - e^{-t/\tau})$. The switch dissipates $\int_0^\infty i^2R_{on}\,dt = (V_{in0}^2/R_{on})(\tau/2) = \tfrac12C_1V_{in0}^2$, all the energy initially stored on $C_1$.

**Common mistake.** Treating X as a floating node and combining $C_1$ and $C_2$ in series or parallel, giving $\tau = R_{on}C_1C_2/(C_1 + C_2)$, $R_{on}(C_1 + C_2)$ or $R_{on}C_2$. The ideal op amp holds X at virtual ground, so $C_1$ alone is in the discharge loop with $R_{on}$.

**Common mistake.** Expecting the dissipated energy to depend on $R_{on}$. The current scales as $1/R_{on}$ and the duration as $R_{on}$, so $\int i^2R_{on}\,dt$ does not.

**Common mistake.** Expressing the energy in terms of $C_2$ or the final output voltage, e.g. $\tfrac12C_2V_{out}^2$. That energy is stored on $C_2$ and comes from the op amp's supply; the switch dissipates exactly what $C_1$ held, $\tfrac12C_1V_{in0}^2$.
