# Detailed solution - A525

In the proposed converter each comparator's inverting input is a resistive summing node between $V^*_{IN}$ and $-V_{REF}$, and its threshold is the input at which that node passes through ground. Find the threshold as a function of $R_k$, match it to the resistor-string taps, and then weigh the two structures.

### Step 1 — Threshold of a summing-node comparator

The comparator draws no input current, so node X of comparator $k$ is set by the divider formed by $R$ (to $V^*_{IN}$) and $R_k$ (to $-V_{REF}$). Superposition gives

$$
V_X=V^*_{IN}\frac{R_k}{R+R_k}-V_{REF}\frac{R}{R+R_k}=\frac{V^*_{IN}R_k-V_{REF}R}{R+R_k}.
$$

With its + input grounded, the comparator changes state when $V_X$ crosses zero:

$$
V_{th,k}=V_{REF}\,\frac{R}{R_k}.
$$

Its output is high when $V_X<0$, i.e. for $V^*_{IN}$ below the threshold, the complement of the conventional comparator; the encoder takes this into account.

### Step 2 — Resistor values

The equal-resistor string of the conventional converter sets the thresholds of comparators 1, 2 and 3 at $3V_{REF}/4$, $V_{REF}/2$ and $V_{REF}/4$. Matching $R/R_k=V_{th,k}/V_{REF}$:

| Comparator | Threshold | $R/R_k$ | $R_k$ |
|---|---|---|---|
| 1 | $3V_{REF}/4$ | 3/4 | $R_1=\tfrac43R$ |
| 2 | $V_{REF}/2$ | 1/2 | $R_2=2R$ |
| 3 | $V_{REF}/4$ | 1/4 | $R_3=4R$ |

$$
R_1=\tfrac43R,\qquad R_2=2R,\qquad R_3=4R .
$$

### Step 3 — Conventional converter: advantages and disadvantages

**Advantages.** All resistors are equal, which gives good matching and small area, and the series string guarantees the order of the thresholds and hence monotonicity. $V^*_{IN}$ drives only the high-impedance comparator inputs and supplies no dc current. The input goes straight to the comparators.

**Disadvantages.** Each comparator works at a different input common-mode level ($V_{REF}/4$ to $3V_{REF}/4$), so finite CMRR and common-mode-range limits cause threshold errors. The tap nodes have relatively high impedance, which makes them sensitive to comparator kickback and slow to recover when $V_{REF}$ is disturbed.

### Step 4 — Proposed converter: advantages and disadvantages

**Advantages.** Every comparator input sits near ground, so the comparators are insensitive to common-mode effects and can be simple. The summing nodes have the low impedance $R\parallel R_k$, which reduces kickback and speeds recovery.

**Disadvantages.**

- $V^*_{IN}$ must supply current: X is not a virtual ground, so each branch places $R+R_k$ between $V^*_{IN}$ and $-V_{REF}$, giving signal-dependent branch currents $(V^*_{IN}+V_{REF})/(R+R_k)$ and an input resistance
$$
R_{in}=\tfrac73R\parallel3R\parallel5R=\frac{105}{101}R\approx1.04R ,
$$
which falls roughly as $1/2^N$ for $N$ bits.
- A negative reference is needed.
- The input-referred comparator offset is multiplied: since X sees only the fraction $R_k/(R+R_k)$ of $V^*_{IN}$, an offset $V_{OS}$ shifts the threshold by $(1+R/R_k)V_{OS}$, i.e. by $7/4$, $3/2$ and $5/4$ times $V_{OS}$ for comparators 1 to 3.
- More and unequal resistors are needed, with a spread growing about as $2^N$ ($R_k=2^NR/k$ in general). Each threshold depends on its own independent ratio $R/R_k$, so mismatch can reorder thresholds and produce nonmonotonic behavior or missing codes. The extra resistors also add area and thermal noise.
