# Detailed solution - G145

The op amp, the transistor and $R$ form a negative-feedback loop: the source voltage is fed back to the inverting input. An ideal op amp in negative feedback forces its two inputs to the same voltage, which fixes the voltage across $R$ and hence the current; the transistor only has to carry that current.

### Step 1 — Feedback polarity and the virtual short

If the source voltage $V_S$ rises, the op amp's differential input $V_{in}-V_S$ falls, lowering the gate; $V_{GS}$ and the drain current then fall, and $V_S=I_DR$ falls back. The loop is negative feedback, so with an ideal (infinite-gain) op amp

$$
V_S=V_-=V_+=V_{in}.
$$

### Step 2 — Output current

The current in $R$ is $V_S/R=V_{in}/R$. By KCL at the source node this current comes from the source of the transistor, since the ideal op amp draws no input current. The MOS gate draws no current either, so drain and source currents are equal:

$$
I_{out}=I_D=\frac{V_S}{R}=\frac{V_{in}}{R}.
$$

### Step 3 — Role of the transistor and validity

The op amp sets its output to $V_G=V_{in}+V_{GS}$, where $V_{GS}=V_t+\sqrt{2I_{out}/(k'W/L)}$ is whatever gate-source voltage the device needs to carry $V_{in}/R$ in saturation. Neither $V_t$, $k'$ nor $W/L$ appears in $I_{out}$: the circuit is a voltage-to-current converter (transconductor) with $G=1/R$.

The result holds for $V_{in}>0$, since an n-channel device cannot conduct negative drain current; for $V_{in}\le0$ it cuts off and $I_{out}=0$. It also requires the drain voltage to stay at least $V_{ov}$ above the source, so that the transistor remains in saturation, and an op-amp output able to reach $V_{in}+V_{GS}$.
