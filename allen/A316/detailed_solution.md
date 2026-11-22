# Detailed solution - A316

A bulk CMOS process contains, without extra steps, the layers of one bipolar transistor type: a heavily doped source/drain diffusion as emitter, the well as base, and the substrate (or a second diffusion) as collector. The well type therefore decides the BJT polarity, and the fact that the substrate is the collector decides how the device can be used.

### Step 1 — p-well process (n-type substrate)

The available device is an **npn** transistor:

- the vertical (substrate) npn uses an n+ source/drain diffusion in the p-well as emitter, the p-well as base, and the n-type substrate as collector, so its collector is permanently tied to $V_{DD}$;
- a lateral npn, with n+ emitter and collector diffusions side by side in the p-well and the p-well as base, is also possible.

### Step 2 — n-well process (p-type substrate)

The available device is a **pnp** transistor:

- the vertical (substrate) pnp has a p+ emitter in the n-well, the n-well as base and the p-type substrate as collector, tied to $V_{SS}$;
- a lateral pnp is also possible.

### Step 3 — Advantages in a Class A output stage

- Much higher transconductance than a MOSFET at the same current, $g_m=I_C/V_t$; at 1 mA, $1/g_m=25.9\ \mathrm{mV}/1\ \mathrm{mA}\approx26\ \Omega$. As an emitter follower it therefore gives a low output resistance, about $1/g_m$ plus the base-side resistance divided by $1+\beta_F$.
- It comes free with the process (no extra masks), and the follower also provides level shifting and a large current gain.

### Step 4 — Disadvantages

- The substrate device can only be an emitter follower, because its collector is fixed to a supply. The Class A stage is then asymmetric: it sources (npn) or sinks (pnp) current strongly, while the opposite direction is limited by a bias current source, giving asymmetric slew rate and limited output current in one direction.
- The previous stage must supply base current, and the resistance seen at the base, divided by $1+\beta_F$, adds to the output resistance; a MOS follower is often needed in front.
- The output cannot swing close to the rail on the base-drive side, because of $V_{BE}$ and the saturation voltage of the driving device.
- Class A biasing dissipates quiescent power even with no signal.
- $\beta_F$ and $I_S$ are poorly controlled; substrate collector current can trigger latch-up and inject noise into the substrate; lateral devices have low $\beta_F$ and poor frequency response.
