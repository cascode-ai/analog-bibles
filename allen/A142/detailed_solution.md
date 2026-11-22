# Detailed solution - A142

Slewing is a large-signal limit: when a large differential input switches the pair completely, the output capacitor is charged or discharged by a fixed current, and the output ramps at that current divided by the capacitance. Identify the available current in each direction from the current steering in the pair and the mirror.

### Step 1 — Current steering with a large input

A large differential input turns one input transistor fully on and the other off, so the whole tail current $I_{SS}$ flows through one side:

- If M2 takes all of $I_{SS}$, M1 is off, so the mirror M3–M4 carries no current. M2 sources $I_{SS}$ into the output node and M4 sinks nothing: the capacitor charges with $I_{SS}$.
- If M1 takes all of $I_{SS}$, M3 carries $I_{SS}$ and M4 mirrors it, sinking $I_{SS}$ from the output, while M2 is off: the capacitor discharges with $I_{SS}$.

### Step 2 — Slew rate

With device capacitances neglected, only the 100 pF load is at the output, so in both directions

$$
SR=\frac{I_{SS}}{C_L}.
$$

| $I_{SS}$ | $SR=I_{SS}/C_L$ |
|---|---|
| 10 µA | $10\ \mu\mathrm A/100\ \mathrm{pF}=0.1\ \mathrm{V/\mu s}$ |
| 1 µA | $1\ \mu\mathrm A/100\ \mathrm{pF}=0.01\ \mathrm{V/\mu s}$ |

The slew rate is symmetric, because the mirror turns M1's full current into an equal sink current at the output. It depends only on the tail current and the capacitance, not on the transistor sizes or the small-signal gain; lowering $I_{SS}$ to raise the gain (as in a micropower design) slows the stage proportionally.
