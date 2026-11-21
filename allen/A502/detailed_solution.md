# Detailed solution - A502

A dual-slope conversion has two phases: a run-up of fixed length $N_{REF}$ clock periods, and a run-down whose length $N_{out}$ is proportional to the input. Find $N_{out}$ from the condition that the integrator returns to its starting level, then add the two phases.

### Step 1 — Run-up

Model the positive integrator as $dv_{int}/dt=Kv_s$, with $K$ its gain constant (for an RC integrator $K=1/RC$) and $v_s$ the connected source. Starting from $v_{int}=V_{th}$ and integrating the constant sampled input $v_{in}^*$ for $N_{REF}$ clock periods of length $T$:

$$
v_{int}(t_1)=V_{th}+K\,v_{in}^*\,N_{REF}T .
$$

The length of this phase is fixed by the counter carry, $N_{REF}$ periods, whatever the input.

### Step 2 — Run-down

With $-V_{REF}$ connected, the output falls at the constant rate $KV_{REF}$. It reaches $V_{th}$ again after $N_{out}$ periods, when

$$
K\,V_{REF}\,N_{out}T=K\,v_{in}^*\,N_{REF}T
\;\Longrightarrow\;
N_{out}=N_{REF}\,\frac{v_{in}^*}{V_{REF}} .
$$

The constants $K$ and $T$ cancel, which is why the dual-slope result does not depend on the integrator's $RC$ or the clock frequency.

### Step 3 — Conversion time

The conversion time (excluding reset) is the sum of the two phases:

$$
N_{conv}=N_{REF}+N_{out}=N_{REF}\left(1+\frac{v_{in}^*}{V_{REF}}\right)\ \text{clock periods}.
$$

| $v_{in}^*$ | Run-up | Run-down $N_{out}$ | Conversion time |
|---|---|---|---|
| $0.25V_{REF}$ | $N_{REF}$ | $0.25N_{REF}$ | $1.25N_{REF}$ |
| $0.7V_{REF}$ | $N_{REF}$ | $0.7N_{REF}$ | $1.7N_{REF}$ |

The conversion time therefore grows with the input; its worst case, $v_{in}^*\to V_{REF}$, is $2N_{REF}$ periods, i.e. $2\cdot2^N$ for an $N$-bit counter with $N_{REF}=2^N$.
