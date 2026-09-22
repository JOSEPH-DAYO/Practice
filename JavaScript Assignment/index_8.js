//class statistics

class Statistics {
  constructor(data) {
    this.data = data
  }

  count() {
    return this.data.length
  }

  sum() {
    return this.data.reduce((total, value) => total + value, 0)
  }

  min() {
    return Math.min(...this.data)
  }

  max() {
    return Math.max(...this.data)
  }

  range() {
    return this.max() - this.min()
  }

  mean() {
    return this.sum() / this.count()
  }

  median() {
    const sorted = [...this.data].sort((a, b) => a - b)
    return sorted[Math.floor(sorted.length / 2)]
  }

  mode() {
    const frequencies = {}

    this.data.forEach(value => {
      frequencies[value] = (frequencies[value] || 0) + 1
    })

    const mode = Object.keys(frequencies).reduce((a, b) =>
      frequencies[a] > frequencies[b] ? a : b
    )

    return {
      mode: Number(mode),
      count: frequencies[mode],
    }
  }

  variance() {
    const mean = this.mean()

    return (
      this.data.reduce((total, value) => {
        return total + (value - mean) ** 2
      }, 0) / this.count()
    )
  }

  standardDeviation() {
    return Math.sqrt(this.variance())
  }

  frequencyDistribution() {
    const frequencies = {}

    this.data.forEach(value => {
      frequencies[value] = (frequencies[value] || 0) + 1
    })

    return Object.entries(frequencies)
      .map(([value, count]) => [value, count])
      .sort((a, b) => b[1] - a[1])
  }

  describe() {
    return {
      count: this.count(),
      sum: this.sum(),
      min: this.min(),
      max: this.max(),
      range: this.range(),
      mean: this.mean(),
      median: this.median(),
      mode: this.mode(),
      variance: this.variance(),
      standardDeviation: this.standardDeviation(),
      frequencyDistribution: this.frequencyDistribution(),
    }
  }
}

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27,
  27, 24, 32, 33, 27, 25, 26, 38, 37, 31,
  34, 24, 33, 29, 26,
]

const statistics = new Statistics(ages)

console.log(statistics.describe())