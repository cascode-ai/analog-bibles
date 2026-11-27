### 电流 $I_X$

两管串联。若 $V_G\le 0.7\ \mathrm{V}$ 或 $V_X\le V_G+0.8\ \mathrm{V}$，则 $I_X=0$。两管导通时，转折电压为 $V_k=V_G+0.8\ \mathrm{V}+\sqrt{\beta_n/\beta_p}\,(V_G-0.7\ \mathrm{V})$。

| 工作区 | $I_X$ |
|---|---|
| $V_X<V_k$，PMOS 限流 | $\tfrac12\beta_p(V_X-V_G-0.8\ \mathrm{V})^2$ |
| $V_X>V_k$，NMOS 限流 | $\tfrac12\beta_n(V_G-0.7\ \mathrm{V})^2$ |

两段电流在 $V_X=V_k$ 处相等。增大 $V_G$ 会推迟导通并抬高电流平台。图中取 $\beta_n=\beta_p=1\ \mathrm{mA/V^2}$，分面采用相同坐标尺度。

![示例 $I_X$–$V_X$ 曲线](/q/R055/solution-ix.zh.svg)

### 等效跨导 $g_{m,eq}=\partial I_X/\partial V_G$

截止段为零。PMOS 限流时为 $-\beta_p(V_X-V_G-0.8\ \mathrm{V})$，NMOS 限流时为 $+\beta_n(V_G-0.7\ \mathrm{V})$。若转折落在扫描范围内，空心圆标出两侧极限。在 $V_X=V_k$ 处，固定 $V_X$ 对 $V_G$ 求偏导时，两侧导数不同，偏导数未定义。

![示例等效跨导曲线](/q/R055/solution-gm.zh.svg)

## 评分说明

- +2：正确给出 $V_G>V_{THN}$ 且 $V_X>V_G+|V_{THP}|$ 时才导通、PMOS 限流时的抛物线上升、NMOS 限流时的平坦上限 $\tfrac12\beta_n(V_G-V_{THN})^2$、这些特征随 $V_G$ 的变化，以及 $g_{m,eq}$ 在 PMOS 限流区为负、在 NMOS 限流区为正。
- +1：$I_X$ 正确，但只给出一个工作区的 $g_{m,eq}$，或 PMOS 限流段的跨导符号错误。
- 0：曲线形状部分正确，例如漏掉电流平台。
- −2（明确作为结论）：把器件视为并联、认为 $V_G<V_{THN}$ 时仍有电流，或把 PMOS 源极取在中间节点并由此判断 $V_X$ 很小时导通。
