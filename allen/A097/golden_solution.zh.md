$S_{V_{DD}}^{V_{REF}} = \dfrac{\sqrt{\beta_P}\,V_{DD}}{\sqrt{\beta_P}(V_{DD} - |V_{TP}|) + \sqrt{\beta_N}\,V_{TN}}$，当 $\sqrt{\beta_N}V_{TN} = \sqrt{\beta_P}|V_{TP}|$ 时等于 1，特别是 $\beta_N = \beta_P$ 且 $V_{TN} = |V_{TP}|$ 时（此时 $V_{REF} = V_{DD}/2$）。

- 两个器件都饱和（二极管连接）且流过相同的电流：$\tfrac{\beta_N}{2}(V_{REF} - V_{TN})^2 = \tfrac{\beta_P}{2}(V_{DD} - V_{REF} - |V_{TP}|)^2$。
- 两边开平方：$V_{REF} = \dfrac{\sqrt{\beta_P}(V_{DD} - |V_{TP}|) + \sqrt{\beta_N}V_{TN}}{\sqrt{\beta_N} + \sqrt{\beta_P}}$，因此 $\partial V_{REF}/\partial V_{DD} = \sqrt{\beta_P}/(\sqrt{\beta_N} + \sqrt{\beta_P})$。
- 由 $S = \dfrac{V_{DD}}{V_{REF}}\cdot\dfrac{\sqrt{\beta_P}}{\sqrt{\beta_N} + \sqrt{\beta_P}}$ 得到上面的表达式。
- $V_{REF}$ 具有 $aV_{DD} + b$ 的形式，其中 $b \propto \sqrt{\beta_N}V_{TN} - \sqrt{\beta_P}|V_{TP}|$；$S = 1$ 当且仅当 $b = 0$。当 $\beta_N = \beta_P$ 且 $V_{TN} = |V_{TP}|$ 时：$V_{REF} = V_{DD}/2$，因此 $V_{DD}$ 变化 10% 会使 $V_{REF}$ 变化 10%，与电阻分压器相同。其他情况下 $S$ 不等于 1（当 $V_{DD} \gg V_T$ 时趋于 1）。
