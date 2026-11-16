# Detailed solution - R061

**Approach.** Use the gradual-channel picture: the channel potential $V(x)$ rises from 0 at the source to $V_{DS}$ at the drain, and the inversion layer exists only where $V_G - V(x) > V_{TH}$. The pinch-off point is where the local channel potential reaches $V_G - V_{TH}$. With $V_{DS}$ fixed at 1.2 V, follow this point as $V_G$ rises through the cut-off, saturation and triode regions.

### Step 1 — Where the channel pinches off

Here $V_{GS} = V_G$ and $V_{DS} = 1.2$ V (fixed). Let $x$ run along the channel from $x = 0$ at the source to $x = L$ at the drain, with channel potential $V(x)$, $V(0) = 0$ and $V(L) = V_{DS}$. The mobile charge per unit length is

$$Q_d(x) = WC_{ox}\left[V_G - V(x) - V_{TH}\right],$$

largest at the source and decreasing toward the drain. The channel **pinches off** where $Q_d$ falls to zero:

$$V_G - V(x_p) - V_{TH} = 0 \quad\Longleftrightarrow\quad V(x_p) = V_G - V_{TH} ,$$

i.e. where the channel potential equals the overdrive $V_{ov} = V_G - V_{TH}$.

- If $V_{DS} > V_{ov}$ (**saturation**), this potential is reached *before* the drain: the inversion layer ends at $x_p < L$, and the remaining voltage $V_{DS} - V_{ov}$ is dropped across a short depleted region of length $\Delta L = L - x_p$, which electrons cross swept by the strong lateral field.
- If $V_{DS} < V_{ov}$ (**triode**), the inversion layer extends all the way to the drain and there is no pinch-off.

### Step 2 — $V_G < V_{TH} = 0.7$ V: no channel, no pinch-off point

Even at the source end $V_G - 0 < V_{TH}$, so there is no inversion layer anywhere and nothing to pinch off. The device is off (apart from a small subthreshold current).

### Step 3 — $0.7\ \mathrm{V} < V_G < 1.9$ V: saturation; pinch-off moves toward the drain

A channel forms at the source, and the device is saturated as long as

$$V_{DS} > V_G - V_{TH} \quad\Longleftrightarrow\quad 1.2\ \mathrm{V} > V_G - 0.7\ \mathrm{V} \quad\Longleftrightarrow\quad V_G < 1.9\ \mathrm{V}.$$

The channel pinches off where $V(x_p) = V_G - 0.7$ V, and the voltage across the depleted gap is

$$V_{gap} = V_{DS} - (V_G - V_{TH}) = 1.2 - (V_G - 0.7) = 1.9 - V_G .$$

As $V_G$ increases:

- the potential at which pinch-off occurs, $V_G - V_{TH}$, rises toward $V_{DS}$;
- the voltage across the gap, $1.9 - V_G$, shrinks;
- a smaller voltage needs a shorter depleted region, so the gap $\Delta L$ shrinks and the **pinch-off point moves toward the drain**;
- the effective channel length $L_{eff} = L - \Delta L$ grows.

As a rough one-dimensional estimate, a depleted region supporting $V_{gap}$ in a substrate of doping $N_{sub}$ has a length of order $\sqrt{2\epsilon_{si}V_{gap}/(qN_{sub})}$, so $\Delta L$ shrinks roughly as $\sqrt{1.9 - V_G}$. (With $V_G$ fixed and $V_{DS}$ increasing, the same physics moves the pinch-off point *toward the source*: the origin of channel-length modulation.)

| $V_G$ (V) | $V_G - V_{TH}$ (V) | Voltage across the gap $1.9 - V_G$ (V) | Pinch-off point |
|---|---|---|---|
| < 0.7 | — | — | no channel |
| 1.0 | 0.3 | 0.9 | farthest from the drain |
| 1.3 | 0.6 | 0.6 | closer to the drain |
| 1.6 | 0.9 | 0.3 | very close to the drain |
| 1.9 | 1.2 | 0 | at the drain edge |
| > 1.9 | > 1.2 | — | none (triode) |

### Step 4 — $V_G = 1.9$ V: pinch-off at the drain (edge of saturation)

At $V_G = V_{TH} + V_{DS} = 0.7 + 1.2 = 1.9$ V the channel potential reaches $V_G - V_{TH} = 1.2$ V exactly at the drain: the inversion charge falls to zero right at the drain edge and the gap has vanished. This is the boundary between saturation and triode, $V_{DS} = V_{GS} - V_{TH}$.

### Step 5 — $V_G > 1.9$ V: triode, no pinch-off

Now $V_G - V(x) - V_{TH} > 0$ everywhere, including at the drain:

$$Q_d(L) = WC_{ox}(V_G - 1.2 - 0.7) = WC_{ox}(V_G - 1.9) > 0 .$$

The inversion layer is continuous from source to drain, and there is **no pinch-off point**: the device is in triode, a gate-controlled resistor. Increasing $V_G$ further makes the channel thicker everywhere (at $V_G = 2.2$ V, for example, the charge at the drain end corresponds to $0.3$ V of local overdrive).

### Result

- $V_G < 0.7$ V: no inversion layer, hence no pinch-off point.
- $0.7\ \mathrm{V} < V_G < 1.9$ V (saturation): the channel pinches off where the local channel voltage equals $V_G - V_{TH}$, before the drain. As $V_G$ rises, this voltage approaches $V_{DS} = 1.2$ V, the depleted gap between pinch-off and drain (which supports $1.9 - V_G$) shrinks, and the **pinch-off point moves toward the drain**; the effective channel length grows.
- $V_G = V_{TH} + V_{DS} = 1.9$ V: the pinch-off point reaches the drain (edge of saturation).
- $V_G > 1.9$ V: triode; the inversion layer extends continuously to the drain and there is no pinch-off point.

**Common mistake.** Saying the pinch-off point moves toward the source as $V_G$ increases, which is what happens when $V_{DS}$ increases at fixed $V_G$. Raising $V_G$ raises the channel potential at which pinch-off occurs, so the point moves toward the drain.

**Common mistake.** Keeping a pinch-off point in the triode region. For $V_G > 1.9$ V the local overdrive at the drain, $V_G - V_{DS} - V_{TH}$, is positive, so the channel does not pinch off anywhere.
