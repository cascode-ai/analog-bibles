# Detailed solution - G168

Compare the two polarities in the conventional complementary connection: an n-channel input pair uses a p-channel mirror load and a p-channel common-source driver, while a p-channel input pair uses the opposite devices. Most of the differences follow from electron mobility being about 2–3 times hole mobility, so that $g_m=\sqrt{2\mu C_{ox}(W/L)I_D}$ is larger for n-channel devices at the same size and current. Others follow from where the input stage sits between the supplies.

### Step 1 — Higher transconductance: more gain and bandwidth

For the same current and $W/L$, the n-channel pair has the larger $g_{m1}$, by about $\sqrt{\mu_n/\mu_p}\approx1.7$. This raises the first-stage gain $g_{m1}(r_{o2}\parallel r_{o4})$ and the gain-bandwidth product $g_{m1}/C_C$. Alternatively, the same $g_{m1}$ is obtained with smaller input devices, which have less capacitance and give higher speed.

### Step 2 — Lower offset from the current-mirror load

The mirror's threshold mismatch is referred to the input as $(g_{m3}/g_{m1})\Delta V_{t(3-4)}$. With an n-channel input pair and a p-channel mirror the ratio is $\sqrt{\mu_p/\mu_n}\approx0.58$ instead of $\sqrt{\mu_n/\mu_p}\approx1.73$, so this offset component is about three times smaller for equal sizes and currents.

### Step 3 — Lower input-referred thermal noise

In strong inversion the input-referred thermal noise voltage density of the pair varies as $1/\sqrt{g_{m1}}$ (its power as $1/g_{m1}$). The larger $g_{m1}$ of the n-channel pair therefore gives lower white noise at the same current and $W/L$, or meets a given noise target with less current or smaller devices.

### Step 4 — Common-mode input range near the positive supply

An n-input stage works for common-mode inputs from about $-V_{SS}+V_t+2V_{ov}$ up to $V_{DD}-|V_{GS3}|+V_t$, a range that body effect can extend up to or beyond $V_{DD}$. It suits applications whose inputs sit near the positive rail, such as high-side current sensing, where a p-input stage would run out of headroom for its tail source.

### Step 5 — Further considerations

- **Power-supply rejection.** In the complementary connection, the supply to which the tail source and the second-stage load are referred gets the low-frequency cancellation (very high PSRR); with an n-channel input this is the negative supply. Choose it when that supply is the noisier one.
- **Well isolation.** In a p-well process only the n-channel devices can sit in their own well with source tied to body, removing body effect and supply coupling through the body; there the n-channel pair is the one that gets this benefit.

A known drawback weighs the other way: p-channel devices usually have lower $1/f$ noise, and in the conventional direct-coupled design the n-input stage drives a lower-$g_m$ p-channel second-stage device, which lowers the nondominant pole.
