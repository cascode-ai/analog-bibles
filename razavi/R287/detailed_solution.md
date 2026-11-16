# Detailed solution - R287

**Approach.** At the instant of the step the amplifier, behind its finite $R_{out}$, can deliver only a finite current, so it cannot change any capacitor charge in zero time. Node Y is therefore momentarily isolated between $C_F$ and $C_L$, and charge conservation at Y (a capacitive divider) gives the size of the initial jump. Afterwards the amplifier pulls Y toward $-A\Delta V$ through $R_{out}$. We confirm both parts by deriving the transfer function, which also locates the right-half-plane zero.

### Step 1 — The model

- X is driven by an ideal source: $V_X$ steps by $\Delta V$ at $t = 0$.
- The amplifier is an ideal controlled source $-AV_X$ in series with $R_{out}$, driving Y.
- $C_F$ connects X and Y; $C_L$ connects Y to ground.

All voltages are changes from the initial state ($V_X = V_Y = 0$ before the step).

<!-- diagram: diagram-01.cir -->

### Step 2 — Why the output first jumps up

To change a capacitor's voltage in zero time, a finite amount of charge must be delivered in zero time, which takes an impulsive (infinite) current. The only connection from the amplifier to Y is $R_{out}$, which carries the finite current $(-AV_X - V_Y)/R_{out}$. So over the infinitesimal interval $0^-$ to $0^+$ it delivers **no charge** to Y.

Node Y is therefore, for that instant, an isolated node: the total charge on the plates attached to it, $C_F$'s right plate and $C_L$'s top plate, cannot change. The ideal source at X, on the other hand, can supply any current, so X really does jump by $\Delta V$, and it pushes charge through $C_F$ into $C_L$.

### Step 3 — Size of the jump (charge conservation)

Let the jump at Y be $\Delta V_Y$. The charge stored on Y's side of each capacitor changes by:

- $C_F$: its voltage $V_Y - V_X$ changes by $\Delta V_Y - \Delta V$, so the charge on Y's plate changes by $C_F(\Delta V_Y - \Delta V)$;
- $C_L$: the charge on its top plate changes by $C_L\Delta V_Y$.

Charge conservation at Y:

$$
\begin{aligned}
C_F(\Delta V_Y - \Delta V) + C_L\Delta V_Y &= 0\\
(C_F + C_L)\,\Delta V_Y &= C_F\,\Delta V\\
\Delta V_Y &= \Delta V\,\frac{C_F}{C_F + C_L} .
\end{aligned}
$$

This is simply a **capacitive divider**: the input step is coupled to Y through $C_F$ and divided against $C_L$. The jump is positive, i.e. in the same direction as the input, and smaller than $\Delta V$. For $C_L = 0$ it reduces to the full $\Delta V$.

### Step 4 — After the jump: decay toward $-A\Delta V$

For $t > 0$, $V_X = \Delta V$ is constant. KCL at Y (current in through $R_{out}$ equals the current charging the two capacitors, $C_F$ seeing $dV_Y/dt$ because X is now fixed):

$$\frac{-A\Delta V - V_Y}{R_{out}} = (C_F + C_L)\frac{dV_Y}{dt} \quad\Longrightarrow\quad R_{out}(C_F + C_L)\frac{dV_Y}{dt} + V_Y = -A\Delta V .$$

The solution, starting from $V_Y(0^+) = \Delta V\,C_F/(C_F + C_L)$:

$$V_Y(t) = -A\Delta V + \left(A + \frac{C_F}{C_F + C_L}\right)\Delta V\,e^{-t/\tau}, \qquad \tau = R_{out}(C_F + C_L).$$

The amplifier's current through $R_{out}$ charges both capacitors and pulls Y down to the ideal value $-A\Delta V$.

### Step 5 — The transfer function and its zero

KCL at Y in the s-domain (currents leaving Y):

$$\frac{V_Y + AV_X}{R_{out}} + (V_Y - V_X)\,sC_F + V_Y\,sC_L = 0 .$$

Multiply by $R_{out}$ and collect terms:

$$
\begin{aligned}
V_Y\left[1 + sR_{out}(C_F + C_L)\right] &= V_X\,(sR_{out}C_F - A)\\
\frac{V_Y}{V_X}(s) &= \frac{sR_{out}C_F - A}{1 + sR_{out}(C_F + C_L)} .
\end{aligned}
$$

- **Pole:** $s_p = -1/[R_{out}(C_F + C_L)]$, matching the decay time constant of Step 4.
- **Zero:** $s_z = +A/(R_{out}C_F)$, in the **right half plane**, and independent of $C_L$.
- **dc gain:** $-A$. **High-frequency gain:** $C_F/(C_F + C_L)$, positive and equal to the jump ratio. The initial value theorem gives $V_Y(0^+) = H(\infty)\Delta V = \Delta V\,C_F/(C_F + C_L)$, as found above.

The initial jump in the "wrong" direction is the time-domain signature of this RHP zero. The non-inverting feedforward path through $C_F$ dominates at high frequencies, the inverting amplifier path dominates at low frequencies, and they cancel at $s_z$. $C_L$ does not move the zero; it only reduces the jump and slows the decay.

### Step 6 — Numerical example

$A = 10$, $R_{out} = 10\ \mathrm{k}\Omega$, $C_F = 1$ pF, $C_L = 4$ pF, $\Delta V = 0.1$ V:

$$
\begin{aligned}
\Delta V_Y(0^+) &= 0.1\ \mathrm{V}\times\frac{1}{1 + 4} = 20\ \mathrm{mV},\\
\tau &= (10\ \mathrm{k}\Omega)(5\ \mathrm{pF}) = 50\ \mathrm{ns},\\
V_Y(t) &= -1 + (1 + 0.02)\,e^{-t/50\,\mathrm{ns}}\ \mathrm{V},\\
s_z &= \frac{10}{(10\ \mathrm{k}\Omega)(1\ \mathrm{pF})} = 10^9\ \mathrm{s^{-1}}\ \text{(same as without } C_L).
\end{aligned}
$$

### Result

The output first jumps **up** by

$$\Delta V_Y(0^+) = \Delta V\,\frac{C_F}{C_F + C_L},$$

because at $t = 0^+$ the finite $R_{out}$ cannot deliver the impulsive current needed to change capacitor charges. The step at X reaches Y only through $C_F$, which forms a capacitive divider with $C_L$. It then decays toward $-A\Delta V$ with $\tau = R_{out}(C_F + C_L)$, as the amplifier's current through $R_{out}$ charges both capacitors. This behaviour reveals a **right-half-plane zero** in

$$\frac{V_Y}{V_X} = \frac{sR_{out}C_F - A}{1 + sR_{out}(C_F + C_L)},$$

located at $s_z = +A/(R_{out}C_F)$, independent of $C_L$.

**Common mistake.** Taking the jump as the full $\Delta V$. With a load capacitor at Y, the charge pushed through $C_F$ is shared with $C_L$, so the jump is reduced by the divider ratio $C_F/(C_F + C_L)$.

**Common mistake.** Inverting the divider, $\Delta V\,C_L/(C_F + C_L)$. The coupling element is $C_F$: a larger $C_F$ gives a larger jump, while a larger $C_L$ holds Y more firmly and reduces it.

**Common mistake.** Saying the output goes down immediately, or attributing the bump to amplifier ringing. The model has only one pole. The upward jump is direct feedforward through $C_F$, the signature of the RHP zero.
