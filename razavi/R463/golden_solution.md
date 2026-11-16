# Golden Solution - R463

## Reference answer

$|A_v| = g_{mb1}(r_{O1}\|r_{O3}) = \eta\,g_{m1}(r_{O1}\|r_{O3})$, with $\eta = \dfrac{\gamma}{2\sqrt{2|\phi_F| + V_{BS}}}$ and $V_{BS} = V_{in,CM} - V_{DD}$ (well-to-source voltage). For $V_{in,CM} = V_{DD}$: η = 0.4/(2√0.8) ≈ 0.22, so the gain is only about one fifth of that of a gate-driven pair with the same devices.

- With the gate fixed, the bulk controls the current only through the threshold: $|V_{TH}| = |V_{TH0}| + \gamma(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|})$, so the bulk transconductance is $g_{mb} = \eta g_m$.
- Raising the well voltage raises $|V_{TH}|$ and lowers the drain current, so each half behaves like a common-source stage with transconductance $g_{mb1}$ and load $r_{O1}\|r_{O3}$ (inverting from each well to its own drain); the differential gain is $g_{mb1}(r_{O1}\|r_{O3})$.
- There is no tail current source: the sources are at an AC ground ($V_{DD}$), so the result holds for each half directly.

## Grading notes

+2: $g_{mb1}(r_{O1}\|r_{O3})$ with $g_{mb} = \eta g_m$ and η written correctly (≈ 0.2–0.3 near $V_{in,CM} \approx V_{DD}$). +1: $g_{mb1}(r_{O1}\|r_{O3})$ without expressing η, or η with a minor slip. 0: correct structure but the load taken as $r_{O1}$ or $r_{O3}$ alone. -2 (asserted as fact): gain written as $g_{m1}(r_{O1}\|r_{O3})$ (as if gate-driven), η claimed > 1, or a tail current source assumed and the bulk treated as AC ground.
