# Goodwright Data Model

## Entities

### Brand
- `id`
- `name`
- `description`
- `founded_year`
- `origin_country`
- `ownership_model`
- `is_family_owned`
- `is_employee_owned`
- `bitcoin_acceptance` (true/false)
- Contact + website

### Product
- `id`
- `brand_id`
- `name`
- `category`
- `sub_category`
- `summary`
- `materials`
- `warranty`
- `price_band`
- `affiliate_link`
- `direct_link`
- `btc_friendly`
- `tags[]`
- `field_tested_story`
- `customer_quotes[]`

### Attribute metadata
- categories, tags, ownership flags, warranty length, etc.

## Filtering
- By category/subcategory
- By origin (USA, Western-aligned)
- By ownership (family, private, etc.)
- By warranty (lifetime, 10-year)
- By payment (accepts BTC)
- By direct vs affiliate

## Testimony
- `customer_quotes`: list of {source, quote, link} scraped/curated from Reddit, forums, reviews, etc.
